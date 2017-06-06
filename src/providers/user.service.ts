import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {

  authUrl = "https://todo-server23.herokuapp.com";
  constructor(public http: Http) {}

    //Sign In
    signin(param): Observable<any[]> {
      console.log(param);
      return this.http.post(this.authUrl+'/signin', param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    //Sign Up
    signup(param): Observable<any[]> {
      return this.http.post(this.authUrl+'/signup', param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    handleError(error) {
      return Observable.throw(error.json().error || 'Server error');
    }

}
