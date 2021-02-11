import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OutletCreateComponent } from './outlet-create/outlet-create.component';
import { OutletListComponent } from './outlet-list/outlet-list.component';
import { OutletComponent } from './outlet/outlet.component';
import { VolunteerComponent } from './volunteer/volunteer.component';


const routes: Routes = [
  {path: "" , pathMatch: "full" , redirectTo: "/home"},
  {path: 'home' , component:HomeComponent},
  {path: 'outlet-create/:outletID' , component:OutletCreateComponent},
  {path: 'outlet-list' , component:OutletListComponent},
  {path: 'about' , component:AboutComponent},
  {path:'volunteer',component:VolunteerComponent},
  {path:'admin',component:AdminComponent},
  {path: 'outlet',component:OutletComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
