import { TokenStorageService } from './../../services/token-storage.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  usersList : any[] = [];

  constructor(private userService : UserService, private tokenStorageService : TokenStorageService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.usersList = data;
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      },
    });
  }

  addFriend(userId : number) {
    
  }

}
