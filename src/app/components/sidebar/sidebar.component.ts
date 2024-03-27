import { Component } from '@angular/core';
import { MaterialModule } from '../../material-modules';

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

}
