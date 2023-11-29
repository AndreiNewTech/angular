import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  id: number;
  name: string;
  lastName: string;
  image: string;
  email: string;
  age: number;
  phone: string;
};

const getLimitedUsersUrl = (limit: number) =>
  `https://dummyjson.com/users?limit=${limit}`;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  _currentUser = new BehaviorSubject<User | undefined>(undefined);

  constructor(private httpClient: HttpClient) {
    const URL = getLimitedUsersUrl(10);
    this.httpClient.get(URL).subscribe((val: any) => {
      const users = val.users;
      const newUsers = users.map((user: any) => ({
        name: user.firstName,
        lastName: user.lastName,
        id: user.id,
        image: user.image,
        email: user.email,
        age: user.age,
        phone: user.phone,
      }));
      this._users.next(newUsers);
    });
  }

  get users() {
    return this._users.asObservable();
  }

  getUser(id: number) {
    this.users.subscribe((val) => {
      const user = val.find((user) => user.id === id);
      this._currentUser.next(user);
    });

    return this._currentUser.asObservable();
  }
}
