import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private login: Login, private router: Router) {}

  canActivate(): boolean {
    if (this.login.isLoggedIn() && this.login.getUserRole() === 'ADMIN') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
