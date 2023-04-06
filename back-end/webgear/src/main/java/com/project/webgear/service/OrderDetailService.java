package com.project.webgear.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.webgear.dto.OrderDetailDTO;
import com.project.webgear.entity.CartDetail;
import com.project.webgear.entity.OrderDetail;
import com.project.webgear.entity.Product;
import com.project.webgear.repository.CartDetailRepository;
import com.project.webgear.repository.OrderDetailRepository;
import com.project.webgear.repository.OrderRepository;
import com.project.webgear.repository.ProductRepository;

@Service
public class OrderDetailService {

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartDetailRepository cartDetailRepository;

    public String checkProduct(long magiohang) {
        List<CartDetail> list = cartDetailRepository.findAll();
        for (CartDetail cartDetail : list) {
            if (cartDetail.getGiohang().getMagiohang() == magiohang) {
                if (cartDetail.getSanpham().getTrangthai() == 0) {
                    return cartDetail.getSanpham().getTensanpham();
                }
            }
        }
        return null;
    }

    public void addOrderDetail(long madonhang, long magiohang) {
        OrderDetail od;
        List<CartDetail> list = cartDetailRepository.findAll();
        for (CartDetail cartDetail : list) {
            if (cartDetail.getGiohang().getMagiohang() == magiohang) {
                od = new OrderDetail();
                od.setDonhang(orderRepository.findById(madonhang).get());
                od.setSanpham(cartDetail.getSanpham());
                od.setSoluong(cartDetail.getSoluong());
                od.setDongia(cartDetail.getDongia());
                od.setThanhtien(cartDetail.getThanhtien());
                orderDetailRepository.save(od);
            }
        }
    }

    public boolean updateQuantity(long madonhang) {
        List<OrderDetail> list = orderDetailRepository.findAll();
        Map<Long, Integer> map = new HashMap<>();
        for (OrderDetail od : list) {
            if (od.getDonhang().getMadonhang() == madonhang) {
                Product p = productRepository.findById(od.getSanpham().getMasanpham()).get();
                if (p.getSoluong() < od.getSoluong()) {
                    return false;
                } else {
                    map.put(p.getMasanpham(), p.getSoluong() - od.getSoluong());
                }
            }
        }
        for (Map.Entry<Long, Integer> entry : map.entrySet()) {
            Product p = productRepository.findById(entry.getKey()).get();
            p.setSoluong(entry.getValue());
            productRepository.save(p);
        }
        return true;
    }

    public List<OrderDetailDTO> getListDetail(long madonhang) {
        List<OrderDetail> list = orderDetailRepository.findAll();
        List<OrderDetailDTO> listDTO = new ArrayList<>();
        OrderDetailDTO odDTO;
        for (OrderDetail od : list) {
            if (od.getDonhang().getMadonhang() == madonhang) {
                odDTO = new OrderDetailDTO();
                odDTO.setMasanpham(od.getSanpham().getMasanpham());
                odDTO.setTensanpham(od.getSanpham().getTensanpham());
                odDTO.setSoluong(od.getSoluong());
                odDTO.setDongia(od.getDongia());
                odDTO.setThanhtien(od.getThanhtien());
                listDTO.add(odDTO);
            }
        }
        return listDTO;
    }
}
