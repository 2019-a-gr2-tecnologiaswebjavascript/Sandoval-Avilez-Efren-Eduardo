import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CajeroService } from '../app/cajero.service';
import { Cajero } from 'src/app/interfaces/cajero.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado = false;

  constructor(
    private readonly _cajeroService: CajeroService,
    private readonly _router: Router
    ) { }

  login(cajero: Cajero) {
    if (this._cajeroService.cajeros.find(cajeroEnArreglo => cajeroEnArreglo === cajero)) {
      this.estaLogeado = true;
      const url = [
        '/menu-principal'
      ];

      const parametros = {
        queryParams: {
          nombre: cajero.nombreCajero,
          apellido: cajero.apellidoCajero
        }
      };

      this._router.navigate(url, parametros);
      return true;
    } else {
      const url = [
        '/'
      ];

      const parametros = {
        queryParams: {
          nombre: cajero.nombreCajero,
          apellido: cajero.apellidoCajero
        }
      };

      this._router.navigate(url, parametros);

      return false;
    }
  }
}
