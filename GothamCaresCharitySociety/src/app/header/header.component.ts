import { Component, OnInit } from '@angular/core';


/**
 * This component loads the navbar.
 * The navbar contains the home tab,outlets tab,volunteer registration tab and admin tab.
 * When clicked on each of the tab they navigate to a seperate page.
 * when outlets tab lis clicked to navigates to page which displayes the outlets table.
 * volunteer registration navigate to the volunteer registration form where the volunteers can register.
 * admin tab navigates to the admin login page where the admin can login using their email and password and commit 
 * changes like add,delete and edit outlets.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
