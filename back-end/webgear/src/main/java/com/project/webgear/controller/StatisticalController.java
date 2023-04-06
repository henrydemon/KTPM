package com.project.webgear.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.webgear.common.ResponseMessage;
import com.project.webgear.dto.StatisticalDTO;
import com.project.webgear.service.StatisticalService;

@RestController
@RequestMapping("/api/v1/statistical")
@CrossOrigin(origins = "*")
public class StatisticalController {

    ResponseMessage response;

    @Autowired
    StatisticalService statisticalService;

    @GetMapping
    public ResponseEntity<ResponseMessage> getStatistical() {
        Map<String, Object> map = new HashMap<>();
        response = new ResponseMessage();
        try {
            StatisticalDTO sDTO = statisticalService.getStatistical();
            response.setSuccess(true);
            response.setStatus(HttpStatus.OK);
            response.setMessage("Lấy số liệu thống kê thành công");
            map.put("statisticalByTrademark", sDTO.getThongketheodanhmuc());
            map.put("statisticalByCategory", sDTO.getThongketheothuonghieu());
            map.put("statisticalBySales", sDTO.getThongkedoanhthu());
            map.put("statisticalByOrder", sDTO.getThongketheodonhang());
            map.put("statisticalByBestSeller", sDTO.getThongkesanphambanchay());
            response.setData(map);
            return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<ResponseMessage>(response.Response500(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<ResponseMessage> getStatisticalByDate(
            @RequestParam(name = "fromDate", defaultValue = "") @DateTimeFormat(pattern = "yyyy-MM-dd") Date fromDate,
            @RequestParam(name = "toDate", defaultValue = "") @DateTimeFormat(pattern = "yyyy-MM-dd") Date toDate) {
        Map<String, Object> map = new HashMap<>();
        response = new ResponseMessage();
        try {
            StatisticalDTO sDTO = statisticalService.getStatisticalByDate(fromDate,
                    toDate);
            if (sDTO == null) {
                response.setSuccess(false);
                response.setStatus(HttpStatus.BAD_REQUEST);
                response.setMessage("Ngày thống kê không hợp lệ. Vui lòng kiếm tra lại");
                return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
            }
            response.setSuccess(true);
            response.setStatus(HttpStatus.OK);
            response.setMessage("Lấy số liệu thống kê thành công");
            map.put("statisticalByTrademark", sDTO.getThongketheodanhmuc());
            map.put("statisticalByCategory", sDTO.getThongketheothuonghieu());
            map.put("statisticalBySales", sDTO.getThongkedoanhthu());
            map.put("statisticalByOrder", sDTO.getThongketheodonhang());
            map.put("statisticalByBestSeller", sDTO.getThongkesanphambanchay());
            response.setData(map);
            return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<ResponseMessage>(response.Response500(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}