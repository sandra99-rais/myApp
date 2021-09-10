import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {user} from "../../interfaces/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuS:AuthService) { }

  ngOnInit() {
  }
  login(form :any) {
    let data =form.value
this.AuS.login(data.email,data.mdp)
  .then(resul =>
    console.log(resul)

    )
      .catch(err =>
        console.log('good',err)
      )




}}
