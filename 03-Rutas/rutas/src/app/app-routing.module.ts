import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './ruta-creditos/ruta-creditos.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: 'creditos',
    component: RutaCreditosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
