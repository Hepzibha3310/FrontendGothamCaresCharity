import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { identity, Observable } from 'rxjs';
import {outlets} from './home';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  URL="https://localhost:44367/api/Outlet"
  

  constructor(private http :HttpClient) { }


  addOutlets(data: any){
    return this .http.post(this.URL,data);
  } 
  
  putOutlet(data: any, id: number): Observable<any>{
    console.log(data);
    return this.http.put(`https://localhost:44367/${id}`, data);
  }


  
}
