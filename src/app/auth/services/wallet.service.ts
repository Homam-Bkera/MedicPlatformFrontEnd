import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(public http: HttpClient, private TokenStorage: TokenStorageService) { }

  setWallet(data: any) {
    let token = this.TokenStorage.getToken();
    return this.http.post(`${baseUrl}/user/chargeWallet`, data, {
      headers: {
        Authorization: token
      }
    })
  }

  getWallet() {
    let token = this.TokenStorage.getToken();
    return this.http.get(`${baseUrl}/user/wallet`, {
      headers: {
        Authorization: token,
      }
    });
  }
}
