package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.Trademark;

@Repository
public interface TrademarkRepository extends JpaRepository<Trademark, Long> {

}
