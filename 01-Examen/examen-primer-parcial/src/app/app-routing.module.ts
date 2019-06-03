import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCajeroComponent } from './login-cajero/login-cajero.component';
import { RegistroCajeroComponent } from './registro-cajero/registro-cajero.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RevisarComprasComponent } from './revisar-compras/revisar-compras.component';
import { GestionarTiendasComponent } from './gestionar-tiendas/gestionar-tiendas.component';
import { ComprarComponent } from './comprar/comprar.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { EstaLogueadoGuard } from './servicios/guards/esta-logueado.guard';

const routes: Routes = [
  {
    path: 'app/login',
    component: LoginCajeroComponent
  },
  {
    path: 'registrar-cajero',
    component: RegistroCajeroComponent
  },
  {
    path: 'menu-principal',
    component: MenuPrincipalComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  },
  {
    path: 'listar-compras',
    component: RevisarComprasComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  },
  {
    path: 'gestion-tiendas',
    component: GestionarTiendasComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  },
  {
    path: 'comprar',
    component: ComprarComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent
  },
  {
    path: '',
    redirectTo: '/app/login',
    pathMatch: 'full'
  },
  {
   path: '**',
   component: RutaNoEncontradaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
