import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class auth implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private auth: AuthService) { }

  canActivate(): boolean {
    if (this.tokenStorage.getToken()) {
      this.auth.islogged = false;
    }
    return true;
  }
}