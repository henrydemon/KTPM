package com.project.webgear.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name = "Chitietphieunhap")
public class ImportGoodsDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaChiTiet")
    private long machitiet;

    @OneToOne
    @JoinColumn(name = "MaPhieuNhap", nullable = false)
    private ImportGoods phieunhap;

    @OneToOne
    @JoinColumn(name = "MaSanPham", nullable = false)
    private Product sanpham;

    @Column(name = "SoLuong", nullable = false)
    private int soluong;

    @Column(name = "DonGia", nullable = false)
    private long dongia;

    @Column(name = "ThanhTien")
    private long thanhtien;
}
