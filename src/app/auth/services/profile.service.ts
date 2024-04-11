import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }


  getProfile(token: string) {
    return this.http.get(`${baseUrl}/user/profile`, {
      headers: {
        Authorization: token,
      }
    })
  }

  updateProfile(credentials: any, token: string) {
    return this.http.put(`${baseUrl}/user`, credentials, {
      headers: {
        Authorization: token,
      }
    });

  }

}
