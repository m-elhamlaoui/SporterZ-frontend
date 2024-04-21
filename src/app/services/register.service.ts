import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = "http://localhost:8081/api/v1/auth/";

  constructor(private httpClient: HttpClient) {

  }

  registerUser(firstname: string, lastname: string, email: string, password: string) {
    let httpParams = new HttpParams().set('firstname', firstname).set('lastname', lastname).set('email', email).set('password', password);
    return this.httpClient.post(this.baseUrl + 'register', httpParams);
  }


}
