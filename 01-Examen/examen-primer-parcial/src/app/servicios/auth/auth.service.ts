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

  login(cajeroRecibido: Cajero) {
    console.log(cajeroRecibido);
    if (this._cajeroService.cajeros.some(cajero => cajero.nombreCajero === cajeroRecibido.nombreCajero)) {
      this.estaLogeado = true;
      const url = [
        '/app/menu-principal'
      ];

      const parametros = {
        queryParams: {
          nombre: cajeroRecibido.nombreCajero,
          apellido: cajeroRecibido.apellidoCajero
        }
      };

      this._router.navigate(url, parametros);
      return true;
    } else {
      const url = [
        '/app/registrar-cajero'
      ];

      const parametros = {
        queryParams: {
          nombre: cajeroRecibido.nombreCajero,
          apellido: cajeroRecibido.apellidoCajero
        }
      };

      this._router.navigate(url, parametros);

      return false;
    }
  }
}
