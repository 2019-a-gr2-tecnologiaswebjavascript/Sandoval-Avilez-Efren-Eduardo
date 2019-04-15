import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostarCarritoComponent } from './mostar-carrito/mostar-carrito.component';

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    ItemGaleriaComponent,
    MostarCarritoComponent
  ],
  imports: [ //Otros modulos
    BrowserModule //Directiva: comparte funcionalidad de las directivas
  ],
  providers: [ //Servicios
    CarritoService
  ],
  bootstrap: [ //Declara componente principal
    AppComponent
  ]
})
export class AppModule { }
