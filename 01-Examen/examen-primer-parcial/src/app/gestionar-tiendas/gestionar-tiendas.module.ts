import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraBusquedaTiendasComponent } from './barra-busqueda-tiendas/barra-busqueda-tiendas.component';
import { TablaTiendasComponent } from './tabla-tiendas/tabla-tiendas.component';
import { GestionarTiendasComponent } from './gestionar-tiendas.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BarraBusquedaTiendasComponent,
    TablaTiendasComponent,
    GestionarTiendasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class GestionarTiendasModule { }
