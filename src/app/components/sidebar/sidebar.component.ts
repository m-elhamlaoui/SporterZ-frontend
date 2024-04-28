import { Component } from '@angular/core';
import { MaterialModule } from '../../material-modules';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(
    private tokenStorageService: TokenStorageService
  ) {}


  logout(): void {
    this.tokenStorageService.logout();
  }
}
