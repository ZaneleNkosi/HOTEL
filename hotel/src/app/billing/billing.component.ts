import { Component, OnInit } from '@angular/core';
import {ServicesComponent} from '../services/services.component';
import { Bookings } from '../model/model';
import { ServiceService } from '../service/service.service';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  
  DataStructure: Bookings;

  constructor(private ServiceData: ServiceService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    let bookingData = this.ServiceData.getList();
  }
  
   amountDue = ServicesComponent;
   booking =[];
  sho:any ={};

  save()
  {

this.booking.push(this.sho);
this.sho = {};

  }

  model:any={};
  model2:any={};
  msg:any="";

  addBooking(formData){
    const formValues: Array<Bookings> = [formData];

    formValues.map((b) => {
      b.amt = b.amt;
    })
    
    this.ServiceData.addData(formValues);
    
  }
  deleteBooking(i){
this.booking.splice(i,1);
this.msg="record successfully deleted...";

  }
  myValue;
  editBooking(k){
    
    this.model2.name=this.booking[k].name;
    this.model2.email=this.booking[k].email;
    this.model2.date=this.booking[k].date;
    this.model2.date2=this.booking[k].date2;
    this.model2.guests=this.booking[k].guests;
    this.model2.days=this.booking[k].days;
    this.model2.suite=this.booking[k].suite;
    this.model2.amount=this.booking[k].amount;
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
    for(let i=0; i<this.booking.length; i++){
      if(i==k){
        this.booking[i]=this.model2;
        this.model2={};
        this.msg="record successfully updated...";
      }
    }
  }

  clickMe(){
    this.msg="";
  }



}