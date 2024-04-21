import { AuthenticateService } from './../../services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  formLogin!: FormGroup;

  constructor(private authenticateService: AuthenticateService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  authenticateJWT() {
    let email = this.formLogin.value.email;
    let password = this.formLogin.value.password;
    this.authenticateService.authenticateJWT(email, password).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.authenticateService.loadJWT(resp);
          this.router.navigate(['/home']);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
