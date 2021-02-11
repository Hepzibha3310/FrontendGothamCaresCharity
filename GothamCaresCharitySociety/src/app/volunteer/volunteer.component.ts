import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import {FormControl, FormGroup} from '@angular/forms';





@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit  {


  Volunteer = new FormGroup({
    VolunteerID:new FormControl(''),
    OutletID:new FormControl(''),
    VolunteerName:new FormControl(''),
    VolunteerAddress : new FormControl(''),
    VolunteerPhonenumber: new FormControl(''),
    VolunteerEmail : new FormControl('')

  })

  

  constructor(public service:HomeServiceService){

  }
  ngOnInit():void{

  }
  createVolunteer(){
   // console.log(this.Volunteer.value);
    this.service.addVolunteers(this.Volunteer.value).subscribe((result)=>{
      console.log("Get Data From Service", result)
    })
  }

  
  



}
