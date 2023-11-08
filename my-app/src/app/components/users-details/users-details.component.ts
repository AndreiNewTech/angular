import { Component } from '@angular/core';
import type { User } from './types';
import jsonval from './users.json';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent {
  users: User[] = [];
  selectedUser: User | undefined;

  constructor() {
    this.users = jsonval;
  }

  handleSelectuserEvent(e: User) {
    this.selectedUser = e;
  }
}
