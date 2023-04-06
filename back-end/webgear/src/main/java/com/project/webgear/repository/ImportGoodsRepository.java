package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.ImportGoods;

@Repository
public interface ImportGoodsRepository extends JpaRepository<ImportGoods, Long> {

}
