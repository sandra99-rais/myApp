import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {user} from "../../interfaces/user.interface";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage=''

  constructor(private as: AuthService, private us: UserService, private router:Router,public firebaseService : AuthService) { }

  ngOnInit(): void {
  }
  signup(form :any){
    let data: user=form.value
    console.log('data=', data)
    this.as.signup(data.email,data.mdp)
      .then(resul => {
        this.errorMessage=''
        this.us.adduser(resul.user?.uid, data.nom,data.adresse).then(()=>{
          this.router.navigate(['/'])
        })
          .catch(err => {
            console.log('good',err)
          })
      })
      .catch(err=> {
        console.log('oh shit',err);
        this.errorMessage=err.message
      })



  }
}

