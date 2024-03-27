import { Component, NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    FooterComponent,
    NgIf
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isDark : Boolean = false;

  switchMode() {
    this.isDark = !this.isDark;
  }
}
