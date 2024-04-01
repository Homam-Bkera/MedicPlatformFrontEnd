import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  setToken(token: string): void {
    sessionStorage.setItem('TOKEN', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('TOKEN');
  }

}
