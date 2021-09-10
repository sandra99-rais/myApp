import {Component, OnDestroy, OnInit} from '@angular/core';
import {Instruments} from "../../interfaces/instruments.interface";
import {InstrumentsService} from "../../services/instruments.service";
import {Observable, Subscription} from "rxjs";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  instrument:any

add:number=-1;
isObservable=Observable



  constructor(private is:InstrumentsService, private ps: PanierService) {

  }

  ngOnInit()
  {
    this.is.getallinstruments().subscribe(data => this.instrument =data
    )
  }


  ajouteraupanier(index : number) {
    this.add= +index


  }

  jachete(amount: any) {
    let selectedintruments=this.instrument[this.add]
    let data ={
      name:selectedintruments.nom,
      montant: +amount,
      prix: selectedintruments.prix

    }
    this.ps.ajouteraupanier(data).then(()=> this.add==-1)

  }
}
