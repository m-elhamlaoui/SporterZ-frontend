import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(private registerService: RegisterService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      firstname: this.fb.control(""),
      lastname: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  registerUser() {
    let firstname = this.formRegister.value.firstname;
    let lastname = this.formRegister.value.lastname;
    let email = this.formRegister.value.email;
    let password = this.formRegister.value.password;
    this.registerService.registerUser(firstname, lastname, email, password).subscribe(
      {
        next: resp => {
          console.log(resp);
          alert("Account created successfully!");
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }
}
