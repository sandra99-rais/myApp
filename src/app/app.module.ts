import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InstrumentsComponent } from './components/instruments/instruments.component';
import {AngularFirestoreModule,SETTINGS} from "@angular/fire/compat/firestore";
import {InstrumentsService} from "./services/instruments.service";
import {AngularFireStorageModule} from "@angular/fire/compat/storage"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { CartComponent } from './components/cart/cart.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    LoginComponent,
    SignupComponent,

    NotFoundComponent,
    NavBarComponent,
    InstrumentsComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    NgbModule,FormsModule,AngularFirestoreModule,AngularFireAuthModule,BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBu7MSHrTu1hhSzIQZrU63QheMUKtlSzbc",
        authDomain: "shop-6e4b5.firebaseapp.com",
        projectId: "shop-6e4b5",
        storageBucket: "shop-6e4b5.appspot.com",
        messagingSenderId: "627659204347",
        appId: "1:627659204347:web:90afb0dd3b3cb0a0ecf25e",
        measurementId: "G-3Y1FDH5MXL"
      }
    )
  ],
  providers: [
    {provide :SETTINGS , useValue:{}}
    ,AuthService,InstrumentsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
