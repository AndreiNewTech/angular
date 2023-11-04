import { Component } from '@angular/core';
import jsonval from './users.json';

interface UserExperience {
  jobTitle: string;
  years: number;
  location: string;
}

interface User {
  id: number;
  name: string;
  surname: string;
  address: string;
  studies: string[];
  age: number;
  profession: string;
  experience: UserExperience[];
  hobbies: string[];
  compettencies: string[];
}

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
})
export class UsersDetailsComponent {
  users: User[] = [];

  constructor() {
    // console.log(jsonval);
  }
}
