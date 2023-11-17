import { Component, ElementRef, ViewChild } from '@angular/core';
import { User, UserExperience } from '../users-details/types';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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

  userFom = new FormGroup({
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

  ngOnInit() {
    this.userFom.valueChanges.subscribe((el) => {
      console.log(el);
    });
    console.log(this.userFom.controls.name);

    console.log(this.userFom.get('experience'));
  }

  get formObj() {
    return this.userFom;
  }

  get experienceFormObj() {
    return this.userFom.get('experience');
  }

  get experienceFormObjList() {
    return this.userFom.get('experience')?.get('experienceList') as FormArray;
  }

  handleSubmit() {
    // const lastUserId = this.users.at(-1)?.id ?? 0;
    // const id = lastUserId + 1;
    // const age = parseFloat(this.userForm.age);
    // const hobbiesList = this.userForm.hobbies.split(',');
    // const studiesList = this.userForm.studies.split(',');
    // const competenciesList = this.userForm.competencies.split(',');
    // const user = {
    //   id: id,
    //   ...this.userForm,
    //   age: age,
    //   studies: studiesList,
    //   competencies: competenciesList,
    //   experience: this.workExperienceList,
    //   hobbies: hobbiesList,
    // };
    // console.log(user);
    // // Reset form
    // this.userForm = {
    //   name: '',
    //   surname: '',
    //   address: '',
    //   age: '',
    //   profession: '',
    //   studies: '',
    //   experience: [],
    //   hobbies: '',
    //   competencies: '',
    // };
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
