import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = "http://localhost:8081/api/posts";
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
    return this.http.get(`${this.baseUrl}/getAll`, this.httpOptions);
  }

  getPostById(postId: number) {
    return this.http.get(
      `${this.baseUrl}/get/${postId}`,
      this.httpOptions
    );
  }

  addPost(post: any) {
    return this.http.post(`${this.baseUrl}/create`, post, this.httpOptions);
  }

  deletePost(postId: number) {
    return this.http.delete(
      `${this.baseUrl}/delete/${postId}`,
      this.httpOptions
    );
  }
}