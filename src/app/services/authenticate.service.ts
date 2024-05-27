import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  authenticate(email: string, password: string) {
    const headers = new HttpHeaders({
      'Access-Control-Request-Method': 'POST'
    });
    return this.http
      .post(AppComponent.baseUrl + "api/auth/authenticate", {
        email: email,
        password: password,
      }, { headers: headers })
      .pipe(
        map((res: any) => {
          console.log(res);
          this.tokenStorageService.saveToken(res.token);
          this.tokenStorageService.saveUsername(res.userName);
          this.tokenStorageService.saveUserId(res.userId);
        })
      );
  }
}
