import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const estaLogueado = this._authService.estaLogeado;
      if (estaLogueado) {
        return true;
      } else {
        const url = ['/app', 'login'];
        this._router.navigate(url);
        console.log('No tiene permisos');
        return false;
      }
  }
}
