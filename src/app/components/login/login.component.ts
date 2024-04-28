import { AuthenticationService } from './../../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  authenticationForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loginFailed: boolean = false;
  errorMessage: string = '';
  loginSucceded: boolean = false;
  successMessage: string = '';

  constructor(
    private authenticationService : AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (
      this.authenticationForm.value.email &&
      this.authenticationForm.value.password
    ) {
      this.authenticationService
        .authenticate(
          this.authenticationForm.value.email,
          this.authenticationForm.value.password
        )
        .subscribe({
          next: (data) => {
            this.loginSucceded = true;
            this.successMessage = 'Login successful. Redirecting...';
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 4000);
          },
          error: (err) => {
            this.loginFailed = true;
            this.errorMessage = 'Login failed. Please try again.';
          },
        });
    } else {
      console.log('Please enter a valid email and password.');
    }
  }
}
