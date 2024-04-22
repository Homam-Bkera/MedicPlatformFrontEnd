import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../../auth/services/token-storage.service';

const baseUrl = 'https://medicplatformbackend.onrender.com';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private auth: AuthService, private tokenStorage: TokenStorageService, private http: HttpClient) { }


  addCategory(data: string) {
    let token = this.tokenStorage.getToken();
    return this.http.post(`${baseUrl}/category`, data, {
      headers: {
        Authorization: token,
      }
    })
  }

  updateCategory(name: any, id: number) {
    let token = this.tokenStorage.getToken();
    return this.http.put(`${baseUrl}/category/?id=${id}`, name, {
      headers: {
        Authorization: token,
      }
    })
  }

  deleteCategory(id: number) {
    let token = this.tokenStorage.getToken();
    return this.http.delete(`${baseUrl}/category/?id=${id}`, {
      headers: {
        Authorization: token,
      },
      params: {
        id: id
      }
    })
  }

  getAllCategory(storageId: number) {
    return this.http.get(`${baseUrl}/category/all?storageId=${storageId}`, {
      params: {
        storageId: storageId,
      }
    })
  }

  getOneCategory(id: number) {
    return this.http.get(`${baseUrl}/category/one?id=${id}`)
  }

  setCategoryID(id: number) {
    sessionStorage.setItem('categoryId', id + '');
  }

  getCategoryID() {
    return sessionStorage.getItem('categoryId');
  }
}
