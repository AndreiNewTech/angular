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
  canActivate(): Promise<boolean> {
    return this.userService
      .getUser()
      .then((user) => {
        if (!user) {
          // If user is logged in, redirect to a different page and return false
          this.router.navigate(['/login']); // Redirect to dashboard or appropriate route
          return false;
        }
        // If user is not logged in, allow access to the route
        return true;
      })
      .catch(() => {
        // Handle the error or just return true to allow access
        return true;
      });
  }
}
