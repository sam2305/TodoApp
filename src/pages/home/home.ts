import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { TodoServiceProvider } from '../../providers/todo.service';
import { Todo } from  '../../models/todo.model';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons: string[];
  items: Array<Todo>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService:TodoServiceProvider, public storage:Storage) {
    var param={}
    this.storage.get('token').then(val=>{
      param['token']=val;
      todoService.load(param).subscribe(todos=>{
        console.log(todos);
    });
  });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
