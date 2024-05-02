import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = "http://localhost:8085/api/v1/auth/";

  constructor(
    private httpClient: HttpClient
  ) {}

  registerUser(firstname: string, lastname: string, username: string, email: string, password: string) {
    // let httpParams = new HttpParams().set('firstname', firstName).set('lastname', lastName).set('email', email).set('password', password);
    return this.httpClient.post(this.baseUrl + 'register',{
      firstName: firstname,
      lastName: lastname,
      login: username,
      email: email,
      password: password,
    }
    ).pipe(
      map((res: any) => {
        console.log(res);
      })
    );
  }


}

