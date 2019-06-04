import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisarComprasComponent } from './revisar-compras.component';
import { ComponentesComunesModule } from '../componentes-comunes/componentes-comunes.module';

@NgModule({
  declarations: [
    RevisarComprasComponent
  ],
  imports: [
    CommonModule,
    ComponentesComunesModule
  ]
})
export class RevisarComprasModule { }
