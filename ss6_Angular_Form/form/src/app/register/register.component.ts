import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitter = false;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl(),
      passwordConfirm: new FormControl(),
      country: new FormControl(),
      age: new FormControl("",[Validators.required,this.validateCustomAge]),
      gender: new FormControl(),
      phone: new FormControl("",[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)])
    }, { validators: this.checkPasswords })
  }
  validateCustomAge(age: AbstractControl){
    let temp = age.value;
    if (temp<18){
      return {'invalidAge' : true}
    }
    return null
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('passwordConfirm').value
    return pass === confirmPass ? null : { notSame: true }
  }
  ngOnInit(): void {
  }

  create() {
    this.submitter = true;
    console.log(this.registerForm.value)
  }
}
