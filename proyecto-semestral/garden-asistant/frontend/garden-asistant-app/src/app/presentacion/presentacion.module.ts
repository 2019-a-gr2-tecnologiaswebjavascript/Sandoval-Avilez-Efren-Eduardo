import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './presentacion/presentacion.component';



@NgModule({
  declarations: [
    PresentacionComponent
  ],
  exports: [
    PresentacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentacionModule { }
