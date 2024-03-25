import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MaterialModule } from '../../material-modules';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
