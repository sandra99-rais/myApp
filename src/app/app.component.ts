import { Component } from '@angular/core';
import {animate, group, query, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      transition('0=>1 , 1=> 0', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),


            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),


          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),

            animate(500, style({
              transform: 'translateX(100%)'
            }))
          ])
        ])
      ])
    ])
  ]
})






export class AppComponent {
  title = 'myApp';
}
