import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutService } from '../about.service';

/**
 * On loading this component add outlet page will be rendered witha form.
 * which will have the outletid,outletname,streetname,landmark,number of available food packs
 * number of volunteers required,type of food,datetime.
 * The admin can fill in the details and submit the form.
 * On clickig the submit button an API call is made.
 * based on this API call the data enterd by the admin will be stored on the database.
 * 
 * Members:
 * formGroup:FormGroup instance which contains outletid,outletname,streetname,landmark,number of available food packs
 * number of volunteers required,type of food,datetime.
 */

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  Outlet = new FormGroup({
    OutletID:new FormControl(''),
    OutletName:new FormControl(''),
    StreetName:new FormControl(''),
    Landmark:new FormControl(''),
    NumberOfAvailableFoodPacks: new FormControl(''),
    TypeOfFood: new FormControl(''),
    NumberOfVolunteersRequired: new FormControl(''),
    DateTime: new FormControl(''),

  })
  


  constructor(public service:AboutService) { }

  ngOnInit():void{
    
  }
  createOutlet(){
    // console.log(this.Volunteer.value);
     this.service.addOutlets(this.Outlet.value).subscribe((result)=>{
       console.log("Get Data From Service", result)
     })
   }

  }
      











 


