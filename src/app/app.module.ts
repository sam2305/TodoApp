import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { SignInPage } from '../pages/SignIn/sign-in';
import { SignUpPage } from '../pages/SignUp/sign-up';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoServiceProvider } from '../providers/todo.service';
import { UserServiceProvider } from '../providers/user.service';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    ItemDetailsPage,
    HomePage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SignInPage,
    SignUpPage,
    HomePage,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
