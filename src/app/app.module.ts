import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import firebase  from 'firebase';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'


var firebaseConfig = {
  apiKey: "AIzaSyAO4V2Vd4jMVZ1y3pqczRetLCAjCOxUgEg",
  authDomain: "room-lo.firebaseapp.com",
  databaseURL: "https://room-lo.firebaseio.com",
  projectId: "room-lo",
  storageBucket: "room-lo.appspot.com",
  messagingSenderId: "911640206027",
  appId: "1:911640206027:web:710d824344c8570ad1194e",
  measurementId: "G-YQ9HC96SN8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
