package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.CartDetail;

@Repository
public interface CartDetailRepository extends JpaRepository<CartDetail, Long> {

}
