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
public class CartDetailDTO {
    private long masanpham;
    private String tensanpham;
    private int soluong;
    private long dongia;
    private long thanhtien;
    private List<ImageDTO> anh;
    private int tinhtrang;
}