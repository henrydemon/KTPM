package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
