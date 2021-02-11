import { Injectable } from '@angular/core';
import { Volunteers } from './vol';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  URL="https://localhost:44367/api/Volunteers/VolunteerRegistration"

  

  constructor(private http :HttpClient) { }



  addVolunteers(data: any){
    return this .http.post(this.URL,data);
  }
  
  

 


  
    
  
}
