import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-outlet-list',
  templateUrl: './outlet-list.component.html',
  styleUrls: ['./outlet-list.component.css']
})
export class OutletListComponent implements OnInit {
  outlets:any;
 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp= this.http.get("https://localhost:44367/api/Outlet/api/Outlet");
    resp.subscribe((data)=>this.outlets=data);
  }


  

  deleteoutlets(id:number){
    return this.http.delete("https://localhost:44367/api/Outlet/{id}");
  }
  onDelete(id:number){
    console.log(id);
  }










 //editoutlets(outlets:any){
  //  return this.http.put("https://localhost:44367/api/Outlet/Edit Outlet/{id}",outlets);
  //}
  onEdit(outlets:any,id:number){
    console.log("outlets",outlets);
 }
  
  
  
  
    

  
  



  }
  


