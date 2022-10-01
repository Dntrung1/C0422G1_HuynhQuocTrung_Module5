import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {TodoComponent} from "./todo/todo.component";


const routes: Routes = [
  {path:"", component: TodoComponent},
  {path:":name", component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
