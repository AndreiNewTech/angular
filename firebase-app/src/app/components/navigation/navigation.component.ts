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
  constructor(public userService: UserService, public router: Router) {
    this.userService
      .getUser()
      .then((val: any) => {
        this.userService
          .getUserFullDetails(val.uid)
          .then((userDetails: any) => {
            console.log(userDetails);
            this.userName = this.createUserName(
              userDetails.surname,
              userDetails.name
            );
          });

        this.isUserLogged = Boolean(val);
        console.log(val, 'Val');
      })
      .catch(() => {
        this.isUserLogged = false;
        console.log('Catch');
      });
  }

  handleLogout() {
    this.userService.logout().then(() => {
      this.router.navigate(['login']);
      this.isUserLogged = false;
    });
  }

  private createUserName(name: string, surname: string) {
    return name + surname[0];
  }
}
