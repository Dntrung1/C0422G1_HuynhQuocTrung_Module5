import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityUpdateComponent} from "./facility-update/facility-update.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./customer-update/customer-update.component";


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"facility/list", component:FacilityListComponent},
  {path:"customer/list", component:CustomerListComponent},
  {path:"facility/create", component:FacilityCreateComponent},
  {path:"facility/update", component:FacilityUpdateComponent},
  {path:"customer/create", component:CustomerCreateComponent},
  {path:"customer/update", component:CustomerUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
