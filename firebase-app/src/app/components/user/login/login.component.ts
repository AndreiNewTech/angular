import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginEmail = '';
  loginPass = '';

  userEmail: any = '';
  constructor(
    public userService: UserService,
    public auth: Auth,
    public router: Router
  ) {
    if (this.auth.currentUser?.email) {
      this.userEmail = this.auth.currentUser?.email;
    }
  }

  handleSubmitLogin(loginEmail: string, loginPass: string) {
    this.userService.signin(loginEmail, loginPass).then(() => {
      this.userEmail = this.auth.currentUser?.email;

      this.router.navigate(['']);
    });
  }
}