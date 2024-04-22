import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../../auth/services/token-storage.service';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class MedicneService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  addMedice(data: any) {
    let token = this.token.getToken();
    return this.http.post(`${baseUrl}/medicine`, data, {
      headers: {
        Authorization: token,
      }
    })
  }

}
