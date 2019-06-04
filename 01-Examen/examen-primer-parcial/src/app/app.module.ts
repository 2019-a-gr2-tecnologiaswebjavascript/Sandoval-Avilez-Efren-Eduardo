import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarProductosModule } from './gestionar-productos/gestionar-productos.module';
import { LoginCajeroModule } from './login-cajero/login-cajero.module';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { RegistroCajeroModule } from './registro-cajero/registro-cajero.module';
import { RutaNoEncontradaModule } from './ruta-no-encontrada/ruta-no-encontrada.module';
import { CajeroService } from './servicios/app/cajero.service';
import { AuthService } from './servicios/auth/auth.service';
import { EstaLogeadoService } from './servicios/guards/esta-logueado.service';
import { RevisarComprasModule } from './revisar-compras/revisar-compras.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GestionarProductosModule,
    LoginCajeroModule,
    MenuPrincipalModule,
    RegistroCajeroModule,
    RutaNoEncontradaModule,
    RevisarComprasModule
  ],
  providers: [
    CajeroService,
    AuthService,
    EstaLogeadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
