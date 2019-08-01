import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared.module';
import { PresentacionModule } from './presentacion/presentacion.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsuarioService } from './servicios/http/usuario.service';
import { NivelService } from './servicios/http/nivel.service';
import { AreaService } from './servicios/http/area.service';
import { MasetaService } from './servicios/http/maseta.service';
import { ViviendaService } from './servicios/http/vivienda.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    PresentacionModule,
    DashboardModule
  ],
  providers: [
    UsuarioService,
    ViviendaService,
    NivelService,
    AreaService,
    MasetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
