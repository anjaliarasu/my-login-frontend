import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signIn :boolean=true;
  signUpForm = new FormGroup({});
  value=new Date();
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.signIn=!this.signIn;
  }
}
