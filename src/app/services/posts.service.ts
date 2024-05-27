import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
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

  getPosts() {
    return this.http.get(`${AppComponent.baseUrl}api/posts/getAll`, this.httpOptions);
  }

  getPostById(postId: number) {
    return this.http.get(
      `${AppComponent.baseUrl}/get/${postId}`,
      this.httpOptions
    );
  }

  addPost(post: any) {
    return this.http.post(`${AppComponent.baseUrl}api/posts/create`, post, this.httpOptions);
  }

  deletePost(postId: number) {
    return this.http.delete(
      `${AppComponent.baseUrl}api/posts/delete/${postId}`,
      this.httpOptions
    );
  }
}