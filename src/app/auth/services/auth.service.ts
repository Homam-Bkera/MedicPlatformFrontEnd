import { Injectable, inject } from '@angular/core';
import { UserLogin } from '../interfaces/user-login';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogged: boolean = true;

  //Injection
  http = inject(HttpClient);

  constructor() {
    this.isLogged();
  }

  login(credentials: UserLogin): any {
    return this.http.post(`${baseUrl}/user/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged() {
  }

}
