import { Component } from '@angular/core';

import { Auth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  pass = '';
  age = 0;
  name = '';
  surname = '';
  userEmailAlreadyExists = false;

  constructor(
    public userService: UserService,
    public auth: Auth,
    public router: Router
  ) {}

  handleSubmitRegister() {
    const userForm = {
      email: this.email,
      pass: this.pass,
      age: this.age,
      name: this.name,
      surname: this.surname,
    };
    this.userService
      .register(userForm)
      .then(() => this.router.navigate(['']))
      .catch((er: any) => {
        if (er.message.includes('Email already exists')) {
          console.log('Email already exists From the client');
          this.userEmailAlreadyExists = true;
        }
      });
  }
}
