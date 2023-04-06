package com.project.webgear.dto;

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
public class OrderDetailDTO {

    private long masanpham;
    private String tensanpham;
    private int soluong;
    private long dongia;
    private long thanhtien;
}
