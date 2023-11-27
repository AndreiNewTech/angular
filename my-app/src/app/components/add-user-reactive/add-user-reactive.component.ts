import { Component, ElementRef, ViewChild } from '@angular/core';
import { User, UserExperience } from '../users-details/types';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add-user-reactive',
  templateUrl: './add-user-reactive.component.html',
  styleUrls: ['./add-user-reactive.component.scss'],
})
export class AddUserReactiveComponent {
  @ViewChild('extraDetails') extraDetails: ElementRef | undefined;
  isAddFormExtraDetailsOpen: boolean = false;
  isAddExperienceOpen: boolean = false;
  users: User[] = [];

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    address: new FormControl(),
    age: new FormControl('', Validators.min(18)),
    profession: new FormControl('', Validators.required),
    hobbies: new FormControl(''),
    studies: new FormControl(''),
    competencies: new FormControl(''),
    experience: new FormGroup({
      experienceList: new FormArray([]),
      jobTitle: new FormControl(''),
      years: new FormControl(''),
      location: new FormControl(''),
    }),
  });

  constructor(public usersService: UsersService) {}

  ngOnInit() {
    this.userForm.valueChanges.subscribe((el) => {
      console.log(el);
    });
  }

  get formObj() {
    return this.userForm;
  }

  get experienceFormObj() {
    return this.userForm.get('experience');
  }

  get experienceFormObjList() {
    console.log(this.userForm.get('experience')?.get('experienceList'));
    return this.userForm.get('experience')?.get('experienceList') as FormArray;
  }

  handleSubmit() {
    console.log(this.userForm.value);
    const lastUserId = this.users.at(-1)?.id ?? 0;
    const id = lastUserId + 1;
    const age = parseFloat(this.userForm.value.age ?? '0');
    const hobbiesList = this.userForm.value.hobbies?.split(',');
    const studiesList = this.userForm.value.studies?.split(',');
    const competenciesList = this.userForm.value.competencies?.split(',');
    const experienceList = this.userForm.value.experience?.experienceList;

    const { name, surname, address, profession } = this.userForm.value;

    const user = {
      id,
      name,
      surname,
      address,
      profession,
      age: age,
      studies: studiesList,
      competencies: competenciesList,
      experience: experienceList,
      hobbies: hobbiesList,
    } as User;

    this.usersService.addUser(user);

    // // Reset form
    // this.userForm.get('experience')?.get('experienceList')?.reset();
    this.userForm.reset();
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
    const experienceList = this.experienceFormObj?.get(
      'experienceList'
    ) as FormArray;

    const expObj = {
      jobTitle: this.experienceFormObj?.get('jobTitle')?.value,
      years: this.experienceFormObj?.get('years')?.value,
      location: this.experienceFormObj?.get('location')?.value,
    };

    experienceList.push(new FormControl(expObj));
    console.log(experienceList);
  }

  handleChipClick(ev: Event, index: number) {
    const experienceList = this.experienceFormObj?.get(
      'experienceList'
    ) as FormArray;

    experienceList.removeAt(index);
  }
}
