package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

}
