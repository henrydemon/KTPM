package com.project.webgear.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.webgear.dto.ImportGoodsDetailDTO;
import com.project.webgear.entity.ImportGoodsDetail;
import com.project.webgear.entity.Product;
import com.project.webgear.repository.ImportGoodsDetailRepository;
import com.project.webgear.repository.ImportGoodsRepository;
import com.project.webgear.repository.ProductRepository;

@Service
public class ImportGoodsDetailService {

    @Autowired
    ImportGoodsDetailRepository importDetailRepository;

    @Autowired
    ImportGoodsRepository importRepository;

    @Autowired
    ProductRepository productRepository;

    public List<ImportGoodsDetailDTO> getListImportGoodsDetail(long maphieunhap) {
        List<ImportGoodsDetail> list = importDetailRepository.findAll();
        List<ImportGoodsDetailDTO> listDTO = new ArrayList<>();
        ImportGoodsDetailDTO igDTO;
        for (ImportGoodsDetail ig : list) {
            igDTO = new ImportGoodsDetailDTO();
            if (ig.getPhieunhap().getMaphieunhap() == maphieunhap) {
                igDTO.setMasanpham(ig.getSanpham().getMasanpham());
                igDTO.setTensanpham(ig.getSanpham().getTensanpham());
                igDTO.setSoluong(ig.getSoluong());
                igDTO.setDongia(ig.getDongia());
                igDTO.setThanhtien(ig.getThanhtien());
                listDTO.add(igDTO);
            }
        }
        return listDTO;
    }

    public void addImportDetail(long maphieunhap, List<ImportGoodsDetailDTO> listDTO) {
        ImportGoodsDetail ig;
        Product p;
        for (ImportGoodsDetailDTO igDTO : listDTO) {
            ig = new ImportGoodsDetail();
            ig.setPhieunhap(importRepository.findById(maphieunhap).get());
            p = productRepository.findById(igDTO.getMasanpham()).get();
            ig.setSanpham(p);
            ig.setSoluong(igDTO.getSoluong());
            ig.setDongia(igDTO.getDongia());
            ig.setThanhtien(igDTO.getThanhtien());
            importDetailRepository.save(ig);
            p.setSoluong(p.getSoluong() + ig.getSoluong());
            productRepository.save(p);
        }
    }
}
