package com.project.webgear.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Table(name = "Sanpham")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaSanPham")
    private long masanpham;

    @Column(name = "TenSanPham", nullable = false)
    private String tensanpham;

    @OneToOne
    @JoinColumn(name = "MaDanhMuc", nullable = false)
    private Category danhmuc;

    @OneToOne
    @JoinColumn(name = "MaThuongHieu", nullable = false)
    private Trademark thuonghieu;

    @Column(name = "SoLuong")
    private int soluong;

    @OneToMany(mappedBy = "sanpham", cascade = CascadeType.ALL)
    private List<Image> hinhanh;

    @Column(name = "MoTa", columnDefinition = "TEXT")
    private String mota;

    @Column(name = "Gia", nullable = false)
    private long gia;

    @Column(name = "GiamGia")
    private long giamgia;

    @Column(name = "TrangThai")
    private int trangthai;
}
