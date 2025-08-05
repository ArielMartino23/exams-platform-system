import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Añadido FormsModule
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../services/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class SignupComponent {
  public user = {
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
  };

  constructor(private userService: User) {}

  formSubmit() {
    console.log('Datos del usuario:', this.user);

    if (!this.user.username) {
      alert("Username is required");
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: (data) => {
        console.log('Respuesta del servidor:', data);
        alert('User saved successfully');
        // Resetear el formulario después del registro exitoso
        this.user = {
          username: '',
          password: '',
          name: '',
          surname: '',
          email: '',
          phone: ''
        };
      },
      error: (error) => {
        console.error('Error al registrar:', error);
        alert('There was an error in the system saving user');
      }
    });
  }
}
