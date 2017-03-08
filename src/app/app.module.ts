import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from "ng2-redux"
import { AppComponent } from './app.component';
import { AngularFire, AngularFireModule } from "angularfire2";
import { AppStore } from './store';
import { SignupComponent } from './signup/signup.component';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB9rshnUA1GKQbq5c-sauCcgX4vELAZP-Y",
  authDomain: "parkingapp2-c8b26.firebaseapp.com",
  databaseURL: "https://parkingapp2-c8b26.firebaseio.com",
  storageBucket: "parkingapp2-c8b26.appspot.com",
  messagingSenderId: "28311343107"
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppStore,
    NgReduxModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
