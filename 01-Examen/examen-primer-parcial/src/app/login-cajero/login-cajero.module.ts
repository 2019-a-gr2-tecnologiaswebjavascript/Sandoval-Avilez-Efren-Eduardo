import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCajeroComponent } from './login-cajero.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginCajeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginCajeroModule { }
