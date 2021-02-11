import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { OutletListComponent } from './outlet-list/outlet-list.component';
import { OutletCreateComponent } from './outlet-create/outlet-create.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeServiceService } from './home-service.service';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { OutletComponent } from './outlet/outlet.component';
import { AboutService } from './about.service';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VolunteerComponent,
    OutletListComponent,
    OutletCreateComponent,
    HeaderComponent,
    AboutComponent,
    AdminComponent,
    UserComponent,
    OutletComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  
  ],
  providers: [HomeServiceService,AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
