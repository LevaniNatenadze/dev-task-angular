import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './page/login.page';
import {LoginRoutingModule} from './login-routing.module';
import { LoginFormComponent } from './page/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [LoginPage, LoginFormComponent],
  exports: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
