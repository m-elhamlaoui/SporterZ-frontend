import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  getUsers() {
    return this.http.get(`${AppComponent.baseUrl}api/auth/getAll`, this.httpOptions);
  }

  addFriend(actualUserId : number, friendUserId : number) {
    return this.http.post(`${AppComponent.baseUrl}/addFriend`, {
      actualUserId: actualUserId,
      friendUserId: friendUserId
    }, this.httpOptions);
  }

  getFriends(actualUserId : number) {
    return this.http.get(`${AppComponent.baseUrl}/getFriends?actualUserId=${actualUserId}`, this.httpOptions);
  }

}
