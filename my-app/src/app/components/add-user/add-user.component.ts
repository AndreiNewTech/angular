import { Component, ElementRef, ViewChild } from '@angular/core';
import { User, UserExperience } from '../users-details/types';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @ViewChild('extraDetails') extraDetails: ElementRef | undefined;
  nameInputBlurred: boolean = false;
  isAddFormExtraDetailsOpen: boolean = false;
  isAddExperienceOpen: boolean = false;
  workExperienceList: UserExperience[] = [];
  users: User[] = [];

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
    years: 0,
    location: '',
  };

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users;
    // Initializam cu primul user
  }

  handleSubmit() {
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
      experience: this.workExperienceList,
      hobbies: hobbiesList,
    };

    this.usersService.addUser(user);

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
    this.workExperienceList.push(this.experienceSubForm);
    this.experienceSubForm = {
      jobTitle: '',
      years: 0,
      location: '',
    };
  }

  handleChipClick(ev: Event, experience: UserExperience) {
    this.workExperienceList = this.workExperienceList.filter((exp) => {
      return exp !== experience;
    });
  }
}
