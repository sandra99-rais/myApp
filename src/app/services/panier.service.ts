import { Injectable } from '@angular/core';
import {Instruments} from "../interfaces/instruments.interface";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private fs: AngularFirestore,private auth:AuthService) { }
  ajouteraupanier(data : Instruments){
    return this.fs.collection('users/${this.auth.userId}/panier').add(data)

  }
  getpanier(){
    return this.fs.collection('users/${this.auth.userId}/panier').snapshotChanges()

  }
  deleteachat(id:any){
    return this.fs.doc('users/${this.auth.userId}/panier/${id}').delete()
  }

  saveachat(id: any, montant: any){
    return this.fs.doc('users/${this.auth.userId}/panier/${id}').update({
      montant
    })
  }


}
