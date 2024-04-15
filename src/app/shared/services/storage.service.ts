import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateStorage } from '../../super-admin/interfaces/create-storage.interface';
import { TokenStorageService } from '../../auth/services/token-storage.service';


const baseUrl = 'https://medicplatformbackend.onrender.com';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  createStorage(form: CreateStorage) {
    let token = this.tokenService.getToken();
    return this.http.post(`${baseUrl}/storage`, form, {
      headers: {
        Authorization: token,
      }
    })
  }

  getStorage(id: number) {
    return this.http.get(`${baseUrl}/storage/one?id=${id}`);
  }

  getAllStorage() {
    return this.http.get(`${baseUrl}/storage/all`);
  }

  updateStorage(form: any, id: number) {
    let token = this.tokenService.getToken();
    return this.http.put(`${baseUrl}/storage/?id=${id}`, form, {
      headers: {
        Authorization: token,
      },
      params: {
        id: id
      }
    })
  }

  setCurrentStorage(id: string) {
    sessionStorage.setItem('currentStore', id);
  }
  getCurrentStorage() {
    return sessionStorage.getItem('currentStore') || '';
  }

}
