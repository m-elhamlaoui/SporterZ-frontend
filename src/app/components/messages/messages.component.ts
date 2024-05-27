import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/token-storage.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent  implements OnInit {

  friendList : any[] = [];
  actualUserId : any;
  selectedUser : any;

  constructor(private router : Router, 
    private userService : UserService, 
    private tokenStorageService : TokenStorageService) {}

  ngOnInit(): void {
    this.actualUserId = this.tokenStorageService.getUserId();
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

  openConv(userId: String) {
    this.selectedUser = userId;
  }

  getUserProperty(friendId: String, property: any) {
    const friend = this.friendList.find(friend => friend.userId === friendId);
    return friend ? friend[property] : '';
  }
  

  addMessage() {
    alert('Soon: Add user');
  }
  
}
