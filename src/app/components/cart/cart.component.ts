import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";
import {shopping} from "../../interfaces/shopping.interface";
import {Instruments} from "../../interfaces/instruments.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart :shopping[]=[]

  instruments: Instruments[]=[];
  constructor(private ps:PanierService) { }

  ngOnInit(): void {
    this.ps.getpanier().subscribe(cart =>{
this.cart=cart.map(shopping=>{
  return {
    id:shopping.payload.doc.id,
    ...shopping
  }
})
    })
  }
  delete(index:number){
   return  this.ps.deleteachat(this.cart[index].id)
  }
  save(index:number){
    return this.ps.saveachat(this.cart[index].id,this.cart[index].montant)}


}
