import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraBusquedaTiendasComponent } from './barra-busqueda-tiendas/barra-busqueda-tiendas.component';
import { TablaTiendasComponent } from './tabla-tiendas/tabla-tiendas.component';

@NgModule({
  declarations: [BarraBusquedaTiendasComponent, TablaTiendasComponent],
  imports: [
    CommonModule
  ]
})
export class GestionarTiendasModule { }
