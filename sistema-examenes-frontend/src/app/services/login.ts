import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(private http:HttpClient){}

  //Llama un metedo del servidor en springboot y genera un token

  public generateToken(loginData: any){
    return this.http.post(`${baseUrl}/generate-token`, loginData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Start session and stablish token in the localStorage
  public loginUser(token:any){
    localStorage.setItem('token', token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //Close session and delete the token from the localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Get the token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`, {
        headers: {
            'Authorization': 'Bearer ' + this.getToken()
        }
    });
  }
}
