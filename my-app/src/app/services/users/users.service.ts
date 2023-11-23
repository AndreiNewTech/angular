import { Injectable } from '@angular/core';
import { User } from 'src/app/components/users-details/types';
import jsonval from '../../components/users-details/users.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _users: User[] = [];

  constructor() {
    this._users = jsonval;
  }

  get users() {
    return this._users;
  }

  addUser(user: User) {
    this._users.push(user);
  }
}
