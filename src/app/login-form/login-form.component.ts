import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm!: FormGroup;


  constructor() {
    this.loginForm = new FormGroup<any>({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false),

    });
  }

  submit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      this.loginForm.markAsDirty()
      return
    }
    console.log(this.loginForm.value)
  }
}
