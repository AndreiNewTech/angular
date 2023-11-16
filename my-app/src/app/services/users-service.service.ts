import { Injectable } from '@angular/core';
import { User } from '../components/users-details/types';
import jsonval from '../components/users-details/users.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  usersSubject = new BehaviorSubject<User[]>(jsonval);
  // users = this.usersSubject.asObservable();

  getUsers(): Observable<User[]> {
    return this.usersSubject;
  }

  addUsers(user: User) {
    const users = this.usersSubject.getValue();
    users.push(user);
    this.usersSubject.next(users);
  }
}
