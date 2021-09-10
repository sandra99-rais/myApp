import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {NgModel} from "@angular/forms";
import {Observable} from "rxjs";
import firebase from "firebase/compat";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage=''
  user: Observable<any>
  userId:string='';
  constructor(private AuthF: AngularFireAuth) {
    this.user=AuthF.user
  }
  signup (email:any,password:any) {
  return this.AuthF.createUserWithEmailAndPassword(email,password)

  }
  login(email:any , password:any) {
    return this.AuthF.signInWithEmailAndPassword(email,password)

  }
  logout() {
    return this.AuthF.signOut()
  }

  }
