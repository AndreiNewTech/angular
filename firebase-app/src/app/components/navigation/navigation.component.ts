import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/auth/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isUserLogged: boolean = false;
  userName = '';
  userRole = 'USER';
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {
    this.userService.onAuthStateChangedReturn((user: any) => {
      if (user) {
        this.userService
          .getUserFullDetails(user.uid)
          .then((userDetails: any) => {
            this.userName = this.createUserName(
              userDetails.surname,
              userDetails.name
            );
            this.userRole = userDetails.role;
          });
      }
      this.isUserLogged = Boolean(user);
    });
  }

  handleLogout() {
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
      this.isUserLogged = false;
    });
  }

  get isAdmin(): boolean {
    return this.userRole === 'ADMIN';
  }

  private createUserName(name: string, surname: string) {
    return name + surname[0];
  }
}
