package com.project.webgear.entity;

import java.util.Date;

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
@Table(name = "Phieunhap")
public class ImportGoods {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MaPhieuNhap")
    private long maphieunhap;

    @OneToOne
    @JoinColumn(name = "MaNhanVien")
    private User nhanvien;

    @Column(name = "NgayNhap", nullable = false)
    private Date ngaynhap;

    @Column(name = "TongTien", nullable = false)
    private long tongtien;
}
