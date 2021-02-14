import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



/**
 * On initial loadig of this component signin page for admins will be rendered with a form
 * which will have email and password textbox and a sign in button.
 * The admins can enter the email and password and click on the signin button.
 * on clicking the sign in button it naviates the admins to a page where 
 * they can add,delete and edit the outlet details.
 */

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  outlets:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
 
  

}
