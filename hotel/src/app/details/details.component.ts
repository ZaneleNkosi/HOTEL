import { Component, OnInit, Input} from '@angular/core';
import { BillingComponent } from '../billing/billing.component';
import {ServiceService} from '../service/service.service';
import {Bookings} from '../model/model'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  bookingList: Array<Bookings>;

    @Input() billing:string;
  constructor(private ServicesService: ServiceService) { }
  
  
  ngOnInit() {
    this.getList()
  }

  getList() {
    this.bookingList = this.ServicesService.getList();
  }
  
  model:any={};
  model2:any={};
  msg:any="";
 
  deleteBooking(i){
this.bookingList.splice(i,1);
this.msg="record successfully deleted...";

  }
  myValue;
  editBooking(k){
    
    this.model2.name=this.bookingList[k].name;
    this.model2.email=this.bookingList[k].email;
    this.model2.guests=this.bookingList[k].guests;
    this.model2.suite=this.bookingList[k].suite;
    this.model2.date=this.bookingList[k].date;
    this.model2.date2=this.bookingList[k].date2;
    this.model2.days=this.bookingList[k].days;
    this.model2.amt=this.bookingList[k].amt;
    this.myValue=k;
  }

  openForm(){
    document.getElementById("myForm").style.display="block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  updateBooking(){
    let k=this.myValue;
    for(let i=0; i<this.bookingList.length; i++){
      if(i==k){
        this.bookingList[i]=this.model2;
        this.model2={};
        this.msg="record successfully updated...";
      }
    }
  }
 valid(){
 
 }
  

  clickMe(){
    this.msg="";
  }
}



