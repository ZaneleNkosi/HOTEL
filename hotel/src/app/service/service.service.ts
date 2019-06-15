import { Injectable } from '@angular/core';
import {Bookings} from '../model/model';
import {Price} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  booking: Array<Bookings> = [
    {
      name: "Zanele",
      email: "zanele@gmail.com",
      date: "2000/01/05",
      date2: "2001/01/05",
      guests: 2,
      days: 2,
      suite: "loft",
      amt: 2000
    }
  ]
 
  constructor() { }

  addData(b){
    
    this.booking.push(b[0]);
  }
  getList() {
    return this.booking;
  }
}
