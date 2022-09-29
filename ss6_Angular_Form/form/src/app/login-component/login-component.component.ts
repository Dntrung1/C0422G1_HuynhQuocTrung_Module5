import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  submitter=  false;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.email]),
      password: new FormControl("", [Validators.min(6)])
    })
  }

  ngOnInit(): void {
  }

  create() {
    this.submitter = true;
  }
}
