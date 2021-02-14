import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AboutService } from '../about.service';
import { outlets } from '../home';

/**
 * On loading this component add outletcreate page will be rendered witha form.
 * which will have the outletid,outletname,streetname,landmark,number of available food packs
 * number of volunteers required,type of food,datetime.
 * The admin can modify  the details and click the update button in the form.
 * On clickig the update button an API call is made.
 * based on this API call the data enterd by the admin will be stored on the database.
 * 
 * Members:
 * formGroup:FormGroup instance which contains outletid,outletname,streetname,landmark,number of available food packs
 * number of volunteers required,type of food,datetime.
 */



@Component({
  selector: 'app-outlet-create',
  templateUrl: './outlet-create.component.html',
  styleUrls: ['./outlet-create.component.css']
})
export class OutletCreateComponent implements OnInit {

  outlets:any;
  editOutlet=new FormGroup({
    OutletID:new FormControl(''),
    OutletName:new FormControl(''),
    StreetName:new FormControl(''),
    Landmark:new FormControl(''),
    NumberOfAvailableFoodPacks: new FormControl(''),
    NumberOfVolunteersRequired: new FormControl(''),
    TypeOfFood: new FormControl(''),
    DateTime: new FormControl(''),


  })
 
  
  

  constructor(public service:AboutService,private readonly fb: FormBuilder) { }

  ngOnInit():void{
    

     
    }
    

      updateOutlet(){
      console.log('Clicked');
      this.service.putOutlet(this.editOutlet.value,this.outlets?.OutletID).subscribe(response => {
      console.log(response);
      
      });
  
      }

  
  
  
   
  

}
