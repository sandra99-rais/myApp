import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs :AngularFirestore) { }
  adduser(id:any, nom:any, adresse:any){
    return this.fs.doc('users/' +id).set({
      nom:nom,
      adresse:adresse
    })

  }
}
