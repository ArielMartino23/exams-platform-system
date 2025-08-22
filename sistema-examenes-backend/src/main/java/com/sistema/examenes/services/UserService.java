package com.sistema.examenes.services;

import java.util.Set;

import com.sistema.examenes.entities.User;
import com.sistema.examenes.entities.UserRole;
import com.sistema.examenes.exceptions.UserFoundException;

public interface UserService {

    public User saveUser(User user, Set<UserRole> userRoles) throws UserFoundException;

    public User getUser(String username);

    public void deleteUser(Long userId);

}
