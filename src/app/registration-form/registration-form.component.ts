import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;
  addressForm!: FormGroup;

  countries = ['Country1', 'Country2', 'Country3', 'Country4', 'Country5'];

  constructor(private fb: FormBuilder) {

    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.addressForm = this.fb.group(({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
    }))
  }

  register() {
    if (this.registrationForm.valid) {
      console.log('Registration successful');
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is not valid');

    }
    console.log(this.registrationForm)
  }

}
