import { Injectable } from '@angular/core';
import { User } from 'src/app/components/users-details/types';
import jsonval from '../../components/users-details/users.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _users$ = new BehaviorSubject<User[]>(jsonval);

  get users() {
    return this._users$.asObservable();
  }

  addUser(user: User) {
    this._users$.next([...this._users$.value, user]);
  }
}
