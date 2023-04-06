package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.ImportGoodsDetail;

@Repository
public interface ImportGoodsDetailRepository extends JpaRepository<ImportGoodsDetail, Long> {

}
