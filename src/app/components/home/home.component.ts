
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material-modules';
import { PostsService } from '../../services/posts.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    MaterialModule , 
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  postForm = new FormGroup({
    content: new FormControl(''),
    username: new FormControl('')
  });
  constructor(
    private postsService: PostsService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  postsList: any[] = [];
  editMode = false;
  currentpostId: number = 0;

  ngOnInit(): void {
    this.getPosts();
    // this.username = this.tokenStorageService.getUsername();
    // console.log(this.username);
  }

  getPosts() {
    return this.postsService.getPosts().subscribe({
      next: (data: any) => {
        this.postsList = data;
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      },
    });
  }

  getPostById(postId: number) {
    return this.postsService.getPostById(postId).subscribe({
      next: (data) => console.log(data),
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      },
    });
  }

  addPost() {
    if (this.postForm.valid) {
      this.postForm.value.username = this.tokenStorageService.getUsername();
      this.postForm.value.content = this.postForm.value.content;
      console.log(this.postForm.value);
      this.postsService.addPost(this.postForm.value).subscribe({
        next: (data) => {
          this.getPosts();
        },
        error: (e) => {
          if (e.status === 403) {
            this.tokenStorageService.logout();
          }
        },
      });
    } else {
      console.log('invalid form');
    }
  }

  deletePost(postId: number) {
    this.postsService.deletePost(postId).subscribe({
      next: (data) => {
        this.postsList = this.postsList.filter((post: any) => {
          return post.id !== postId;
        });
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      },
    });
  }
}
