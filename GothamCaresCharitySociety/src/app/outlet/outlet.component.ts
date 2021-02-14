import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/**
 * On initial loading of this component outlet page will be opened with a table
 * which contains columns so called outletid,outletname,steetname,landmark,number of availabel food packets,
 * number of volunteers required,type of food and datetime.
 * This table shows those outlets which are available for the upcoming three days.
 * 
 * The user can have a view of the available outlets and check for the number of voluneers required and can
 * register for the same by clicking on the volunteer register tab on the homepage.
 * 
 * as this page loads it fetch data by an API call
 * Based on this API call it fetches the data from the database and loads it to the table
 * providing information about the outlets available for the upcoming three days.
 * 
 */

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  outlets:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp= this.http.get("https://localhost:44367/api/Outlet/api/Outlet");
    resp.subscribe((data)=>this.outlets=data);
  }

}
