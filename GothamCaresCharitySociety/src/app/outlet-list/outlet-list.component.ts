import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


/**
 * On initial loading of this component outlet list page will be opened with a table
 * which contains columns so called outletid,outletname,steetname,landmark,number of availabel food packets,
 * number of volunteers required,type of food and datetime.
 * This table shows those outlets which are available for the upcoming three days.
 * along with this table there are button for add,delete and edit outlets.
 * add,delete and edit can be only done by admin through admin login.
 *once admin has logged in they can click on add or delete or edit button.

 * on clicking the add button an API call is made.
 * based on this API call the entered data will be stored in data base 
 * 
 * on clicking the delete button an API call is made.
 * based on this API call an outlet will be deleted from data base.
 * 
 * 
 * on clicking the edit button an API call is made.
 * based on this API call the  outlet data can be changed and will be stored in data base 
 * 
 * 
 * 
 * The user can have a view of the available outlets and check for the number of voluneers required and can
 * register for the same by clicking on the volunteer register tab on the homepage.
 * 
 * as this page loads it fetch data by an API call
 * Based on this API call it fetches the data from the database and loads it to the table
 * providing information about the outlets available for the upcoming three days.
 */




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
    return this.http.delete("https://localhost:44367/{id}");
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
  


