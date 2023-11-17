import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl('Andrei', [
      Validators.required,
      Validators.minLength(5),
    ]),
    surname: new FormControl('Duhanes'),
    email: new FormControl('andrei@newtech.ro'),
  });

  ngOnInit() {
    this.userForm.valueChanges.subscribe((el) => {
      console.log(el);
    });

    this.userForm.statusChanges.subscribe((el) => {
      console.log(el);
    });
  }

  ngDoCheck() {}

  get f() {
    return this.userForm;
  }
}
