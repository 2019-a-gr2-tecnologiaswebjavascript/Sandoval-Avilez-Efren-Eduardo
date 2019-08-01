import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _authService: AuthService,
    // tslint:disable-next-line:align
    // tslint:disable-next-line:variable-name
    private readonly _router: Router) {}
    // tslint:disable-next-line:no-trailing-whitespace
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const estaLogeado = this._authService.estaLogeado;
      if (estaLogeado) {
        return true;
      } else {
        const url = ['/login'];
        this._router.navigate(url);
        return false;
      }
  }
}
