import { Component, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { Login } from '../../services/login';
@Component({
  selector: 'app-login',
  standalone : true,
  imports: [MatCard,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule
],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent implements OnInit{
  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(private snack: MatSnackBar, private loginService:Login){

  }

  ngOnInit(): void {

  }

  formSubmit(){
    const username = this.loginData.username?.trim() || '';
    const password = this.loginData.password?.trim() || '';

    if(username === ''){
      this.snack.open('Username is required!!', 'Accept', { duration: 3000 });
      return;
    }

    if(password === ''){
      this.snack.open('Password is required!!', 'Accept', { duration: 3000 });
      return;
    }

    this.loginService.generateToken({
      username: this.loginData.username,
      password: this.loginData.password }).subscribe({
      next: (data: any) =>{
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == "ADMIN"){
            //admin dashboard
            window.location.href = '/admin';
            this.loginService.loginStatusSubject.next(true);
          }else if(this.loginService.getUserRole() == "NORMAL"){
            //user dashboard
            window.location.href = '/user-dashboard';
            this.loginService.loginStatusSubject.next(true);
          }else{
            this.loginService.logout();
          }
        })
      },
      error: (err) => {
        console.log(err);
        this.snack.open('Invalid details, try again', 'Accept', { duration: 3000 });
        }
      })


    console.log('Username:', username, 'Password:', password);
  }
}
