import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentListComponent} from "./component-list/component-list.component";
import {RegisterComponent} from "./register/register.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'list', component: ComponentListComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
