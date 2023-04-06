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
public class ProductDTO {

    private long masanpham;
    private String tensanpham;
    private String mota;
    private int soluong;
    private List<ImageDTO> anh;
    private long mathuonghieu;
    private String tenthuonghieu;
    private long madanhmuc;
    private String tendanhmuc;
    private long gia;
    private long giamgia;
}
