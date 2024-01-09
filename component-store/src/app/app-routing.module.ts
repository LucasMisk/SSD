import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentListComponent} from "./component-list/component-list.component";
import {RegisterComponent} from "./register/register.component";
import { FormsModule } from '@angular/forms';
import {LoginComponent} from "./login/login.component";
import {CartComponent} from "./cart/cart.component";
import {UserAdminComponent} from "./user-admin/user-admin.component";
import {ComponentAdminComponent} from "./component-admin/component-admin.component";
import {AdminPageComponent} from "./admin/admin.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {FaqComponent} from "./faq/faq.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: ComponentListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin/users', component: UserAdminComponent},
  { path: 'admin/components', component: ComponentAdminComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'user', component: UserDetailsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
