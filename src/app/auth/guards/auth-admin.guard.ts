import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class authAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.getRole() == 'admin' && this.tokenStorage.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}
