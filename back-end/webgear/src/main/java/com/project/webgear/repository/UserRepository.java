package com.project.webgear.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.webgear.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
