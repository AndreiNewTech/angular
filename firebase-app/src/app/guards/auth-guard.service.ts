import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../services/auth/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(public userService: UserService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.userService
      .getUser()
      .then(async (user: any) => {
        const currentRoute = state.url.split('/')[1];

        if (!user) {
          if (currentRoute === 'register') {
            return true;
          }

          if (currentRoute !== 'login') {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        }

        const userDetails = await this.userService
          .getUserFullDetails(user.uid)
          .catch((err) => {
            console.error(err);
            return null; // Handle error case
          });

        if (userDetails) {
          const isUserAdmin = userDetails['role'] === 'ADMIN';

          if (currentRoute === 'admin' && !isUserAdmin) {
            this.router.navigate(['/user/robots']);
            return false;
          }

          if (currentRoute === 'user' && isUserAdmin) {
            this.router.navigate(['/admin/robots']);
            return false;
          }

          return true; // If none of the above conditions are met, allow access
        }

        return false; // In case userDetails is null due to error
      })
      .catch((err) => {
        console.error('Error in AuthGuard', err);
        this.router.navigate(['/login']);
        return false;
      });
  }
}
