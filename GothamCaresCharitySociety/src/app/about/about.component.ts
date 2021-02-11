import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AboutService } from '../about.service';

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
      











 


