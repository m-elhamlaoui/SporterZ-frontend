import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = "http://localhost:8082/api/posts";
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
    }),
  };

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

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