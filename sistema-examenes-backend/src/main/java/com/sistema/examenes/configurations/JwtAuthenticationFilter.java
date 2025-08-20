package com.sistema.examenes.configurations;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.sistema.examenes.services.implementation.UserDetailsServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
            
        // ⛔️ No aplicar el filtro sobre el endpoint que genera el token
        if (request.getRequestURI().equals("/generate-token")) {
            filterChain.doFilter(request, response);
            return;
        }
    
        // 🔐 A partir de acá se valida el JWT para el resto de las rutas
        String requestTokenHeader = request.getHeader("Authorization");
        String username = null;
        String jwtToken = null;
    
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtUtils.extractUsername(jwtToken);
            } catch (ExpiredJwtException e) {
                System.out.println("Token has expired: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Error when extracting username: " + e.getMessage());
            }
        } else {
            System.out.println("The token does not start with Bearer");
        }
    
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            var userDetails = this.userDetailsService.loadUserByUsername(username);
            if (jwtUtils.validateToken(jwtToken, userDetails)) {
                var usernamePasswordAuthenticationToken =
                    new org.springframework.security.authentication.UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new org.springframework.security.web.authentication.WebAuthenticationDetailsSource()
                        .buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        } else {
            System.out.println("Token is not valid");
        }
        filterChain.doFilter(request, response);
    }
}

