import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaCreditosComponent } from './ruta-creditos/ruta-creditos.component';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosComponent } from './ruta-productos/ruta-productos.component';
import { RutaProductosHogarComponent } from './ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './ruta-productos-videojuegos/ruta-productos-videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaCreditosComponent,
    RutaHomeComponent,
    RutaNoEncontradaComponent,
    RutaProductosComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
