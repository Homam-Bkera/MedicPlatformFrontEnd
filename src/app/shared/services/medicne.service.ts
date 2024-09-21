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

  getOne(id: number) {
    return this.http.get(`${baseUrl}/medicine/one?id=${id}`)
  }

  updateMedicine(data: any, id: number) {
    let token = this.token.getToken();
    return this.http.put(`${baseUrl}/medicine?id=${id}`, data, {
      headers: {
        Authorization: token,
      }
    })
  }

}
