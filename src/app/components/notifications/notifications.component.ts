import { Component } from '@angular/core';
import { IconsModule } from '../../icon.module';
import { CommonModule } from '@angular/common'; 

interface Notification {
  href: string;
  img_src: string;
  icon_name: string;
  description: string;
  time: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [IconsModule, CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  message: string = 'Welcome to notifications!';
  notifications: Notification[] = [
    {
      href: "#",
      img_src: "https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png",
      icon_name: "heart-filled",
      description: "New message from Jese Leos: \"Hey, what's up? All set for the presentation?\"",
      time: "1min ago"
    },
    {
      href: "#",
      img_src: "https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png",
      icon_name: "thumb-up-filled",
      description: "You received a new comment on your post.",
      time: "5min ago"
    },
    {
      href: "#",
      img_src: "https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png",
      icon_name: "star-filled",
      description: "You left a comment on John's post.",
      time: "10min ago"
    }
  ];
}
