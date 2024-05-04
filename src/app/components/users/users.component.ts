import { NgIf } from '@angular/common';
import { TokenStorageService } from './../../services/token-storage.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  usersList : any[] = [];
  friendList : any[] = [];
  actualUserId : any;

  constructor(private userService : UserService, private tokenStorageService : TokenStorageService) {
  
  }

  ngOnInit(): void {
    this.actualUserId = this.tokenStorageService.getUserId();
    this.getUsers();
    this.getFriends()
  }

  isFriend(user: any): boolean {
    return this.friendList.some(friend => friend.userId === user.userId);
  }

  getFriends() {
    return this.userService.getFriends(this.actualUserId).subscribe({
      next: (data: any) => {
        this.friendList = data;
        console.log("Friends : ", data);
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      }
    });
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

  addFriend(actualUserId : number, friendUserId : number) {
    return this.userService.addFriend(actualUserId, friendUserId).subscribe({
      next: (data: any) => {
        alert("Friend added successfully!");
        this.getFriends();
      },
      error: (e) => {
        if (e.status === 403) {
          this.tokenStorageService.logout();
        }
      }
    });
  }

  sayHi() {

  }

}
