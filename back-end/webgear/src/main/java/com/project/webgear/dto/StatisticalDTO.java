package com.project.webgear.dto;

import java.util.List;
import java.util.Map;

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
public class StatisticalDTO {

    List<CategoryDTO> thongketheodanhmuc;
    List<TrademarkDTO> thongketheothuonghieu;
    Map<String, Long> thongketheodonhang;
    Map<String, Long> thongkedoanhthu;
    List<ProductDTO> thongkesanphambanchay;
}
