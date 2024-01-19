import { Component } from '@angular/core';

import { Auth } from '@angular/fire/auth';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerEmail = '';
  registerPass = '';
  registerAge = '';
  userEmailAlreadyExists = false;

  constructor(
    public userService: UserService,
    public auth: Auth,
    public router: Router
  ) {}

  handleSubmitRegister(
    registerEmail: string,
    registerPass: string,
    registerAge: string
  ) {
    this.userService
      .register(registerEmail, registerPass, registerAge)
      .then(() => this.router.navigate(['']))
      .catch((er) => {
        if (er.message.includes('Email already exists')) {
          console.log('Email already exists From the client');
          this.userEmailAlreadyExists = true;
        }
      });
  }
}
