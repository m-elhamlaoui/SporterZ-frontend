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
  friendList : any;
  actualUserId : any;

  constructor(private userService : UserService, private tokenStorageService : TokenStorageService) {
    this.friendList = tokenStorageService.getFriends();
    this.actualUserId = this.tokenStorageService.getUserId();
    console.log("Friends : ", this.friendList);
  }

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

  addFriend(actualUserId : number, friendUserId : number) {
    return this.userService.addFriend(actualUserId, friendUserId).subscribe({
      next: (data: any) => {
        alert("Friend added successfully!");
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
