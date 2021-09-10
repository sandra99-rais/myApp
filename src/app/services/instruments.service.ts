import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";
import {Instruments} from "../interfaces/instruments.interface";


@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor( private fs:AngularFirestore , private storage :AngularFireStorage) { }
  getallinstruments()  {
    return this.fs.collection('instruments').valueChanges()
  }
  addnewinstru(nom,prix,image){

    let ref=this.storage.ref('instruments/'+image.name)
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl=>{
        this.fs.collection('instruments').add({
          nom,
          prix,
          photoUrl

        }).then(() => {
          console.log("Document successfully added!");
        })
          .catch((error) => {
            console.error("Error : ", error);
          });
      })
    })

  }



}
