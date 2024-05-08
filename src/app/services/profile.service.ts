import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
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
    return this.http.get<any>(`${AppComponent.baseUrl}/api/auth/me`, this.httpOptions);
  }

  updateProfilePicture(picture: string) {
    return this.http.post(`${AppComponent.baseUrl}/api/auth/update`, {"photo": `${picture}`}, this.httpOptions); 
  }

  updateProfile(profileData: any) {
    return this.http.post(`${AppComponent.baseUrl}/api/auth/update`, profileData, this.httpOptions);
  }

  updatePassword(password: any) {
    return this.http.post(`${AppComponent.baseUrl}/api/auth/update`, password, this.httpOptions);
  }
}