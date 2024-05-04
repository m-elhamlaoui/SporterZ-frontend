import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = "http://localhost:8085/api/v1/auth/authenticate";

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  authenticate(email: string, password: string) {
    return this.http
      .post(this.baseUrl, {
        email: email,
        password: password,
      })
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
