import { Component } from '@angular/core';
import { UserServiceProvider } from '../../providers/user.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import {SignUpPage} from '../../pages/SignUp/sign-up';
import {HomePage} from '../../pages/home/home';
import { Storage } from '@ionic/storage';
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  private user:FormGroup;
  public jwtHelper:JwtHelper;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserServiceProvider,private formBuilder: FormBuilder, private storage:Storage) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.jwtHelper = new JwtHelper();
  }


  signin(){
    console.log(this.user.value);
    this.userService.signin(this.user.value).subscribe(userInfo=>{
      var obj= userInfo['data'];
      console.log(obj);
      if(userInfo['success']){
        this.storage.set('token', userInfo['token']);
        console.log(this.jwtHelper.decodeToken(userInfo['token']));
        this.storage.set('name',this.jwtHelper.decodeToken(userInfo['token']).name);
        this.storage.set('username', this.jwtHelper.decodeToken(userInfo['token']).username);
        console.log('here');
        this.navCtrl.push(HomePage);    
      }
    });
  }

  redirect(){
    this.navCtrl.push(SignUpPage);
  }

}
