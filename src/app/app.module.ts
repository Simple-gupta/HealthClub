import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// const appRoutes: Routes=[
//   {path:'home' ,component:HomeComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAppointmentComponent,
    PlaceAppointmentComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
