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
public class TrademarkDTO {

    private long mathuonghieu;
    private String tenthuonghieu;
    private int soluong;
}
