import { Component, OnInit } from '@angular/core';
import type { User } from './types';
import jsonval from './users.json';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | undefined;
  renderHello: boolean = true;
  nameInputBlurred: boolean = false;
  addFormExtraDetails: boolean = false;

  userForm = {
    name: '',
    surname: '',
    address: '',
    age: '',
    profession: '',
    studies: '',
    experience: '',
    hobbies: '',
    competencies: '',
  };

  constructor() {
    this.users = jsonval;
  }

  ngOnChanges(ev: Object) {
    console.log(ev);
  }

  ngDoCheck() {
    console.log('Change check');
  }

  ngOnInit() {
    // Initializam cu primul user
    this.selectedUser = this.users[0];
  }

  handleSelectuserEvent(e: User) {
    this.selectedUser = e;
  }

  handleHelloClick() {
    this.renderHello = !this.renderHello;
  }

  handleSubmit() {
    const lastUserId = this.users.at(-1)?.id ?? 0;
    const id = lastUserId + 1;
    const age = parseFloat(this.userForm.age);

    this.users.push({
      id: id,
      ...this.userForm,
      age: age,
      studies: [],
      competencies: [],
      experience: [],
      hobbies: [],
    });
  }

  handleInputBlur() {
    this.nameInputBlurred = true;
  }

  handleAddExtraDetails() {
    this.addFormExtraDetails = !this.addFormExtraDetails;
  }
}
