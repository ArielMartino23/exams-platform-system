import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Login {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';

  public loginStatusSubject = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // --- Authentication ---

  /** Llama al backend y genera un JWT */
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  /** Guarda token en el localStorage */
  public loginUser(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  /** Cierra sesión y elimina datos */
  public logout(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
    return true;
  }

  // --- Token ---

  /** Devuelve token actual */
  public getToken(): string | null {
    return isPlatformBrowser(this.platformId)
      ? localStorage.getItem(this.TOKEN_KEY)
      : null;
  }

  /** Verifica si el usuario está logueado */
  public isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // --- Usuario ---

  /** Guarda user en localStorage */
  public setUser(user: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  /** Devuelve user parseado */
  public getUser(): any | null {
    if (isPlatformBrowser(this.platformId)) {
      const userStr = localStorage.getItem(this.USER_KEY);
      if (userStr) {
        try {
          return JSON.parse(userStr);
        } catch {
          this.logout();
        }
      }
    }
    return null;
  }

  /** Devuelve el rol principal del usuario */
  public getUserRole(): string | null {
    const user = this.getUser();
    return user?.authorities?.[0]?.authority ?? null;
  }

  /** Obtiene datos del usuario logueado desde el backend */
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    });
  }
}

/*import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  //Calls a method from the springboot server and generates a token

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
*/
