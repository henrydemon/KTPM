package com.project.webgear.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "Hinhanhsanpham")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaHinhAnh")
    private long mahinhanh;

    @ManyToOne
    @JoinColumn(name = "MaSanPham", referencedColumnName = "MaSanPham", nullable = false)
    private Product sanpham;

    @Column(name = "TenHinhAnh", nullable = false)
    private String tenhinhanh;

    @Column(name = "ViTri", nullable = false)
    private int vitri;
}
