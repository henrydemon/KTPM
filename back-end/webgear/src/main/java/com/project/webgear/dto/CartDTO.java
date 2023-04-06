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
public class CartDTO {
    private long mataikhoan;
    private String tenkhachhang;
    private long tongtien;
    private List<CartDetailDTO> chitietgiohang;
}