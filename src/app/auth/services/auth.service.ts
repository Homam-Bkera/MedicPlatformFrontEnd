import { Injectable, inject } from '@angular/core';
import { UserLogin } from '../interfaces/user-login';
import { HttpClient } from '@angular/common/http';
import { register } from '../interfaces/register';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogged: boolean = false;

  //Injection
  http = inject(HttpClient);

  constructor(
    public tokenStorage: TokenStorageService
  ) {
  }

  login(credentials: UserLogin): Observable<any> {
    return this.http.post(`${baseUrl}/user/login`, credentials);
  }

  register(credentials: register) {
    return this.http.post(`${baseUrl}/user`, credentials);
  }

  logout() {

  }

  isLogged() {
    if (this.tokenStorage.getToken() && this.getRole()) {
      this.islogged = true;
    }
  }

  getChargeWallet(token: string) {
    return this.http.post(`${baseUrl}/user/chargeWallet`, 250, {
      headers: {
        Authorization: token,
      }
    });
  }

  setRole(role: string): void {
    sessionStorage.setItem('ROLE', role);
  }

  getRole(): string | null {
    return sessionStorage.getItem('ROLE');
  }

}
