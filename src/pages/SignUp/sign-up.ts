import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  private user:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserServiceProvider,private formBuilder: FormBuilder) {
    this.user = this.formBuilder.group({
      name:['',Validators.required],
      username: ['', Validators.required],
      password: [''],
      cpassword:['']
    });
  }

 

}
