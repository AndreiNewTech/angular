import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import type { User } from '../../../services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss'],
})
export class UsersDashboardComponent {
  users: User[] = [];

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.users.subscribe((users) => {
      this.users = users;
    });
  }
}
