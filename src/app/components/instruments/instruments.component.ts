import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Instruments} from "../../interfaces/instruments.interface";
import {InstrumentsService} from "../../services/instruments.service";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {
  //get the template variable from html
  @ViewChild('image') image : ElementRef



  constructor(private is:InstrumentsService) { }

  ngOnInit(): void {
  }
//add instrument
  ajoutinst(form: NgForm) {
    let nom=(<Instruments>form.value.nom),
    prix=(<Instruments>form.value.prix),
      image=(this.image.nativeElement as HTMLInputElement).files
    this.is.addnewinstru(nom,prix,image)


  }
}
