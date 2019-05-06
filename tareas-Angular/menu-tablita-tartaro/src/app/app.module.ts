import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { BarraOpcionesComponent } from './barra-opciones/barra-opciones.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { BarraFooterComponent } from './barra-footer/barra-footer.component';
import { BarraHeaderComponent } from './barra-header/barra-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemMenuComponent,
    BarraTituloComponent,
    BarraOpcionesComponent,
    CarruselComponent,
    FooterComponent,
    BarraFooterComponent,
    BarraHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
