package com.project.webgear.rest;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import com.google.gson.Gson;

public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    public void commence(HttpServletRequest request, HttpServletResponse response,
            AuthenticationException authException) throws IOException, ServletException {
        Map<String, Object> map = new HashMap<>();
        map.put("success", "false");
        map.put("message", "Cần đăng nhập để sử dụng hệ thống");
        Gson gson = new Gson();
        String jsonString = gson.toJson(map);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        // response.getWriter().write("Cần đăng nhập để sử dụng hệ thống");
        response.setContentType("text/html; charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        response.getWriter().write(jsonString);

    }
}
