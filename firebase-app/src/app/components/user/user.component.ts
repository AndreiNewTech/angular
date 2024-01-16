import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  registerEmail = '';
  registerPass = '';
  registerAge = '';

  loginEmail = '';
  loginPass = '';

  userEmailAlreadyExists = false;

  user = {} as any;
  constructor(public userService: UserService) {}

  handleSubmitRegister(
    registerEmail: string,
    registerPass: string,
    registerAge: string
  ) {
    this.userService
      .register(registerEmail, registerPass, registerAge)
      .then((val) => console.log(val))
      .catch((er) => {
        if (er.message.includes('Email already exists')) {
          console.log('Email already exists From the client');
          this.userEmailAlreadyExists = true;
        }
      });
  }

  handleSubmitLogin(loginEmail: string, loginPass: string) {
    this.userService.signin(loginEmail, loginPass);
  }
}
