package com.project.webgear.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDTO {

    private long madonhang;
    private long mataikhoan;
    private String hoten;
    private String email;
    private String diachi;
    private String tinhthanh;
    private String quanhuyen;
    private String sodienthoai;
    private String ngaymua;
    private long tongtien;
    private List<OrderDetailDTO> chitietdonhang;
    private int trangthai;
}
