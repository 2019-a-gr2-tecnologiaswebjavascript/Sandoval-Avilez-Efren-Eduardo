import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroCajeroComponent } from './registro-cajero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroCajeroComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegistroCajeroModule { }
