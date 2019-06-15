import {EventEmitter, Output, Component, OnInit } from '@angular/core';
import {} from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getTheRose() {
    let theRose = 3500.00;
    return theRose;
  }

  public getQuirky() {
    let quirky = 5500.00;
    return quirky;
  }

  public getLoft() {
    let loft = 6850.00;
    return loft;
  }

  public getTheElegance() {
    let theElegance = 9500.00;
    return theElegance;
  }

  public getTheYoung() {
    let theYoung = 5500.00;
    return theYoung;
  }

  public getFamily() {
    let family = 6500.00;
    return family;
  }
}
