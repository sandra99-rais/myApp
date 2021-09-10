import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";


import {NotFoundComponent} from "./components/not-found/not-found.component";
import {InstrumentsComponent} from "./components/instruments/instruments.component";
import {CartComponent} from "./components/cart/cart.component";


const routes: Routes = [
  {path:"" , component : HomeComponent, data :{id :0}},
  {path:"login" , component : LoginComponent },
  {path:"signup" , component : SignupComponent},
  {path:"cart" , component : CartComponent},
  {path:"admin" , component : InstrumentsComponent,data :{id :1}},
  {path:"**" , component : NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
