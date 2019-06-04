import { Injectable } from '@angular/core';
import { Cajero } from 'src/app/interfaces/cajero.interface';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {
  cajeros: Cajero[] = [
    {
      nombreCajero: 'Efren',
      apellidoCajero: 'Sandoval'
    },
    {
      nombreCajero: 'Edison',
      apellidoCajero: 'Tamayo'
    },
    {
      nombreCajero: 'Jorge',
      apellidoCajero: 'Carrillo'
    }
  ];

  constructor() { }

  registrarCajero(cajero: Cajero): string {
    let mensaje = '';
    if (this.cajeros.push(cajero)) {
      mensaje = 'Cajero registrado exitosamente.';
    } else {
      mensaje = 'Ha ocurrido un error, el cajero no pudo ser registrado';
    }
    return mensaje;
  }
}
