import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(public http: HttpClient) { }

  ChargeWallet(token: string) {
    return this.http.post(`${baseUrl}/user/chargeWallet`, { cash: 250 }, {
      headers: {
        Authorization: token,
      }
    });
  }

  getWallet(token: string) {
    return this.http.get(`${baseUrl}/user/wallet`, {
      headers: {
        Authorization: token,
      }
    });
  }
}
