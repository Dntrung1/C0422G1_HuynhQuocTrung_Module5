import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductUpdateComponent} from "./product-update/product-update.component";


const routes: Routes = [
  {path:"", component:ProductComponent},
  {path:"create", component:ProductCreateComponent},
  {path:"update/:id", component:ProductUpdateComponent},
  {path:"delete/:idDelete", component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
