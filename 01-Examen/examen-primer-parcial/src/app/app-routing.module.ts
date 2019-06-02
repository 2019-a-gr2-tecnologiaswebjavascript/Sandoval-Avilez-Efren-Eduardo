import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menuPrincipal',
    component: MenuPrincipalComponent
  },
  {
    path: 'listar-compras',
    component: RutaCreditosComponent,
    canActivate:[
     EstaLogeadoService
    ]
  },
  {
    path: 'gestion-tiendas',
    component: RutaCreditosComponent,
    canActivate:[
      EstaLogeadoService
    ]
  },
  {
    path: 'comprar',
    component: RutaCreditosComponent,
    canActivate:[
      EstaLogeadoService
    ]
  },
  {
    path: 'no-encontrada',
    component: RutaNoEncontradaComponent
  },
  {
    path: '',
    redirectTo: '/login',
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
