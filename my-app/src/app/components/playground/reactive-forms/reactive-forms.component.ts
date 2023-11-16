import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe((el) => {
      console.log(el);
      console.log(this.myForm);
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  // Helper method for easier access to form fields
  get f() {
    return this.myForm.controls;
  }
}
