import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isUserLogged: boolean = false;
  constructor(public userService: UserService, public router: Router) {
    this.userService.onUserStateChanged(() => {
      if (this.userService.getUser()) {
        this.isUserLogged = true;
      } else {
        this.isUserLogged = false;
      }
    });
  }

  handleLogout() {
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
      this.isUserLogged = false;
    });
  }
}
