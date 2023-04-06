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
public class ImportGoodsDTO {

    private long maphieunhap;
    private long manhanvien;
    private String tennhanvien;
    private String ngaynhap;
    private long tongtien;
    private List<ImportGoodsDetailDTO> chitietphieunhap;
}
