import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';
import { GestionarTiendasModule } from '../gestionar-tiendas/gestionar-tiendas.module';
import { RevisarComprasModule } from '../revisar-compras/revisar-compras.module';
import { ComprarModule } from '../comprar/comprar.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    GestionarTiendasModule,
    RevisarComprasModule,
    ComprarModule,
    AppRoutingModule
  ]
})
export class MenuPrincipalModule { }
