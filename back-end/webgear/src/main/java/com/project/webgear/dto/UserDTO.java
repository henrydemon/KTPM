package com.project.webgear.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

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
public class UserDTO {

    private long mataikhoan;
    private String email;
    private String password;
    private String holot;
    private String ten;
    private String sodienthoai;
    private int quyen;

    public List<GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        if (quyen == 0) {
            authorities.add(new SimpleGrantedAuthority("Admin"));
        } else if (quyen == 1) {
            authorities.add(new SimpleGrantedAuthority("Staff"));
        } else if (quyen == 2) {
            authorities.add(new SimpleGrantedAuthority("User"));
        }
        return authorities;
    }
}
