import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    LayoutComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  isDark !: Boolean;

  constructor() {
    this.isDark = localStorage.getItem('isDark') === 'true';
  }

  toggleMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', this.isDark.toString());
    window.location.reload(); 
  }

}
