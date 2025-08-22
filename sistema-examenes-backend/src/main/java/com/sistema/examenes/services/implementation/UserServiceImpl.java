package com.sistema.examenes.services.implementation;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.examenes.entities.User;
import com.sistema.examenes.entities.UserRole;
import com.sistema.examenes.exceptions.UserFoundException;
import com.sistema.examenes.repository.RoleRepository;
import com.sistema.examenes.repository.UserRepository;
import com.sistema.examenes.services.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User saveUser(User user, Set<UserRole> userRoles) throws UserFoundException {
        User userLocal = this.userRepository.findByUsername(user.getUsername());
        if (userLocal != null) {
            System.out.println("User already exists!");
            try {
                throw new UserFoundException("User already exists!");
            } catch (UserFoundException ex) {
            }
        } else {
            for (UserRole userRole : userRoles) {
                roleRepository.save(userRole.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            userLocal = this.userRepository.save(user);
    }
        return userLocal;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    
}
