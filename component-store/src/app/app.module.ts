import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PCComponentService} from "./pcComponent.service";
import {HttpClientModule} from "@angular/common/http";
import { ComponentListComponent } from './component-list/component-list.component';
import {RegisterComponent} from "./register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import {SharedService} from "./Share.service";
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ComponentAdminComponent } from './component-admin/component-admin.component';
import { AdminPageComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    UserAdminComponent,
    ComponentAdminComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PCComponentService, RegisterComponent, LoginComponent, CartComponent, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
