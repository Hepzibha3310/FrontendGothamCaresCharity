import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import {FormControl, FormGroup} from '@angular/forms';

/**
 * On initial loading of this component volunteer registration page will be opened with a form
 * which will have volunteerid,outletid,volunteername,volunteeraddress,volunteerphonenumber and volunteeremail.
 * The submit button will be disabled on initial rendering as the form is not valid initially.
 * 
 * The user can enter the details in the corresponding textbox.
 * The form remains rendered until the user specifies the outletid.
 * 
 * Once the form is valid the submit button will be enabled.On clicking it an API call is made.
 * Based on the API call the information submited by the user will be stored in database.
 * 
 * Members:
 * formGroup-FormGroup instance which contains volunteerid,outletid,volunteername,volunteeraddress,volunteerphonenumber
 * and volunteeremail fields.
 * 
 */



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
