import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  addExperience: boolean = false;

  @ViewChild('extraDetails') extraDetails: ElementRef | undefined;

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

  ngOnChanges(ev: Object) {}

  ngDoCheck() {
    const studiesList = this.userForm.studies.split(',');
  }

  ngOnInit() {
    // Initializam cu primul user
    this.selectedUser = this.users[0];
    this.users = jsonval;
  }

  handleSelectuserEvent(e: User) {
    console.log(e);
    this.selectedUser = e;
  }

  handleSubmit(form: any) {
    const lastUserId = this.users.at(-1)?.id ?? 0;
    const id = lastUserId + 1;
    const age = parseFloat(this.userForm.age);

    const hobbiesList = this.userForm.hobbies.split(',');
    const studiesList = this.userForm.studies.split(',');
    const competenciesList = this.userForm.competencies.split(',');

    this.users.push({
      id: id,
      ...this.userForm,
      age: age,
      studies: studiesList,
      competencies: competenciesList,
      experience: [],
      hobbies: hobbiesList,
    });

    // Reset form
    this.userForm = {
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
  }

  handleInputBlur() {
    this.nameInputBlurred = true;
  }

  handleAddExtraDetails(e: Event) {
    if (this.extraDetails?.nativeElement === e.target) {
      this.addFormExtraDetails = !this.addFormExtraDetails;
    }
  }
}
