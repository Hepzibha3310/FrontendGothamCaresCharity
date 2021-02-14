import { Component, OnInit } from '@angular/core';
import{HomeServiceService}from './../home-service.service';

/**
 * On loading this component homepage contains name,logo,navbar,about us,contact us,and images
 * The navbar contains home tab,outlet tab,volunteer registration tab and admin tab.
 * The user can click on each tab to navigate to each page.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private homeservice:HomeServiceService) { }

  ngOnInit(): void {
  }

}
