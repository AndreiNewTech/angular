import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../users-details/types';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  nameInputBlurred: boolean = false;
  isAddFormExtraDetailsOpen: boolean = false;
  isAddExperienceOpen: boolean = false;
  users: User[] = [];

  @ViewChild('extraDetails') extraDetails: ElementRef | undefined;
  userForm = {
    name: '',
    surname: '',
    address: '',
    age: '',
    profession: '',
    studies: '',
    experience: [],
    hobbies: '',
    competencies: '',
  };

  experienceSubForm = {
    jobTitle: '',
    years: '',
    location: '',
  };

  userService: UsersServiceService;

  constructor(userService: UsersServiceService) {
    this.userService = userService;
  }

  ngOnInit() {
    // Initializam cu primul user
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  handleSubmit(form: any) {
    const lastUserId = this.users.at(-1)?.id ?? 0;
    const id = lastUserId + 1;
    const age = parseFloat(this.userForm.age);

    const hobbiesList = this.userForm.hobbies.split(',');
    const studiesList = this.userForm.studies.split(',');
    const competenciesList = this.userForm.competencies.split(',');

    const user = {
      id: id,
      ...this.userForm,
      age: age,
      studies: studiesList,
      competencies: competenciesList,
      experience: [],
      hobbies: hobbiesList,
    };
    console.log(user);
    this.userService.addUsers(user);

    // this.users.push({
    //   id: id,
    //   ...this.userForm,
    //   age: age,
    //   studies: studiesList,
    //   competencies: competenciesList,
    //   experience: [],
    //   hobbies: hobbiesList,
    // });

    // Reset form
    this.userForm = {
      name: '',
      surname: '',
      address: '',
      age: '',
      profession: '',
      studies: '',
      experience: [],
      hobbies: '',
      competencies: '',
    };
  }

  handleInputBlur() {
    this.nameInputBlurred = true;
  }

  handleAddExtraDetails(e: Event) {
    if (this.extraDetails?.nativeElement === e.target) {
      this.isAddFormExtraDetailsOpen = !this.isAddFormExtraDetailsOpen;
    }
  }

  handleAddExperienceOpen() {
    this.isAddExperienceOpen = !this.isAddExperienceOpen;
  }

  handleAddExperience() {
    console.log(this.experienceSubForm);
  }
}