import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resolveTypeReferenceDirective } from 'typescript';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const routes: Routes = [
  {
    path:"" , redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"placeappointment",
    component:PlaceAppointmentComponent
  },
  {
    path:"viewappointment",
    component:ViewAppointmentComponent
  },
  {
    path:"contactus",
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
