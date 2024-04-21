import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  baseUrl = "http://localhost:8081/api/v1/auth/";
  loginToken !: string;
  isAuthenticated !: boolean;

  constructor(private httpClient: HttpClient) { 
    this.isAuthenticated = false;
  }

  public authenticateJWT(email: string, password: string) {
    let httpParams = new HttpParams().set('email', email).set('password', password);
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.httpClient.post(this.baseUrl + 'authenticate', httpParams, options);
  }

  public loadJWT(resp: any) {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
    this.loginToken = resp['access-token'];
    localStorage.setItem('loginToken', this.loginToken);
  }
  
}
