package com.project.webgear.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
@Entity
@Table(name = "Thuonghieu")
public class Trademark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaThuongHieu")
    private long mathuonghieu;

    @Column(name = "TenThuongHieu", nullable = false)
    private String tenthuonghieu;

    @Column(name = "TrangThai", nullable = false)
    private int trangthai;
}
