import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { TablaResultadosComponent } from './tabla-resultados/tabla-resultados.component';
import { FormsModule } from '@angular/forms';
import { ComponentesComunesComponent } from './componentes-comunes.component';

@NgModule({
  declarations: [
    BarraBusquedaComponent,
    TablaResultadosComponent,
    ComponentesComunesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BarraBusquedaComponent,
    TablaResultadosComponent
  ]
})
export class ComponentesComunesModule { }
