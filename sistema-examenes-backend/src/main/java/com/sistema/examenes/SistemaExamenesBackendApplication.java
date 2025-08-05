package com.sistema.examenes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sistema.examenes.services.UserService;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*User user = new User();
		user.setUsername("John");
		user.setSurname("Doe");
		user.setUsername("johndoe");
		user.setPassword("12345");
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
		System.out.println(savedUser.getUsername());*/
		
	}

}
