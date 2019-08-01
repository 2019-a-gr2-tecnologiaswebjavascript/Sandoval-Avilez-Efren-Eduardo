import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PresentacionComponent } from './presentacion/presentacion/presentacion.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EstaLogueadoGuard } from './servicios/guards/esta-logueado.guard';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'catalogo',
    component: PresentacionComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  },
  {
    path: 'controles',
    component: DashboardComponent,
    canActivate: [
      EstaLogueadoGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
