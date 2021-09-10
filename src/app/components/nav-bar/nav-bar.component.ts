import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isOpen: boolean=false;
  isUser:boolean=false;

  constructor(private autF:AuthService) { }

  ngOnInit(): void {
    this.autF.user.subscribe(user=>{
      if (user) {this.isUser=true
      this.autF.userId=user.uid}
      else {this.isUser=false;
        this.autF.userId=''}
    })
  }

  togglenavbar() {
    this.isOpen=!this.isOpen;
  }

  logout() {
    this.autF.logout().then(()=> console.log('out'))
  }
}
