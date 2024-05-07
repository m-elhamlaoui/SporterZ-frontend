import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) {}

  registerUser(firstname: string, lastname: string, username: string, email: string, password: string) {
    // let httpParams = new HttpParams().set('firstname', firstName).set('lastname', lastName).set('email', email).set('password', password);
    return this.httpClient.post(AppComponent.baseUrl + 'api/auth/register',{
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

