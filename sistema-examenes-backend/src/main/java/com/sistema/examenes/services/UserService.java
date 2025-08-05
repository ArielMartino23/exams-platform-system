package com.sistema.examenes.services;

import java.util.Set;

import com.sistema.examenes.entities.User;
import com.sistema.examenes.entities.UserRole;

public interface UserService {

    public User saveUser(User user, Set<UserRole> userRoles);

    public User getUser(String username);

    public void deleteUser(Long userId);

}
