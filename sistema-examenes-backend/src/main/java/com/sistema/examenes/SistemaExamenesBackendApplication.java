package com.sistema.examenes;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.sistema.examenes.entities.Role;
import com.sistema.examenes.entities.User;
import com.sistema.examenes.entities.UserRole;
import com.sistema.examenes.exceptions.UserFoundException;
import com.sistema.examenes.services.UserService;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		/*try {
				User user = new User();
				user.setUsername("John");
				user.setSurname("Doe");
				user.setUsername("johndoe");
				user.setPassword(bCryptPasswordEncoder.encode("12345"));
				user.setEmail("johndoe@gmail.com");
				user.setPhone("9876543210");
				user.setProfile("default.png");
	
				Role role = new Role();
				role.setRolId(1L);
				role.setRoleName("ADMIN");
	
				Set<UserRole> userRoles = new HashSet<>();
				UserRole userRole = new UserRole();
				userRole.setRole(role);
				userRole.setUser(user);
				userRoles.add(userRole);
	
				User savedUser = this.userService.saveUser(user, userRoles);
				System.out.println(savedUser.getUsername());
		} catch (UserFoundException e) {
			e.printStackTrace();*/
		}
		
		
	}

}
