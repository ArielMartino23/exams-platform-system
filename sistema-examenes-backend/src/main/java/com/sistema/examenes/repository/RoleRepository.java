package com.sistema.examenes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.examenes.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
