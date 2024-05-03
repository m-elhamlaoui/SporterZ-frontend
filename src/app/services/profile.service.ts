import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:8085/api/users';
  private httpOptions: any;

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {
      this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
      }),
    };
  }

  getProfile() {
    return this.http.get<any>(`${this.baseUrl}/me`, this.httpOptions);
  }

  updateProfilePicture(picture: any) {
    return this.http.post(`${this.baseUrl}/update-picture`, picture, this.httpOptions);
  }

  deleteProfilePicture() {
    return this.http.delete(`${this.baseUrl}/delete-picture`, this.httpOptions);
  }

  updateProfile(profileData: any) {
    return this.http.post(`${this.baseUrl}/update`, profileData, this.httpOptions);
  }

  updatePassword(password: any) {
    return this.http.post(`${this.baseUrl}/update-password`, password, this.httpOptions);
  }

  deleteProfile() {
    return this.http.delete(`${this.baseUrl}/delete`, this.httpOptions);
  }
}