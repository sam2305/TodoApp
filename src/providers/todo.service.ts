import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Todo} from '../models/todo.model';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoServiceProvider {

  todosUrl = "https://todo-server23.herokuapp.com/todos"
  constructor(public http: Http, public storage:Storage) {}

    // Get the todo list
    load(param): Observable<Todo[]> {

      return this.http.post(this.todosUrl+'/get', param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    //Get specific todo
    get(param): Observable<Todo> {
      return this.http.post(this.todosUrl+'/'+param['id'],param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    //Create new todo
    create(param): Observable<any[]> {
      return this.http.post(this.todosUrl, param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    //Update specific todo
    update(param): Observable<any[]> {
      return this.http.put(this.todosUrl+'/'+param._id, param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    //Delete specific todo
    delete(param): Observable<any[]> {
      return this.http.delete(this.todosUrl+'/'+param._id, param)
                 .map(res => res.json())
                  .catch(this.handleError);
    }

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
