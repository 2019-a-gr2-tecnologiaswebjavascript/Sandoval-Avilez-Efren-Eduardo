import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprarComponent } from './comprar.component';
import { EncabezadoFacturaComponent } from './encabezado-factura/encabezado-factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { MembreteComponent } from './membrete/membrete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComprarComponent,
    EncabezadoFacturaComponent,
    DetalleFacturaComponent,
    ListaProductosComponent,
    MembreteComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComprarModule { }
