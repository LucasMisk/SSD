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
import {SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    UserAdminComponent,
    ComponentAdminComponent,
    AdminPageComponent,
    UserDetailsComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '98310474368-17bkddheudb5ev5cdar49udvntlrr0f5.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    PCComponentService, RegisterComponent, LoginComponent, CartComponent, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
