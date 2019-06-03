import { Injectable } from '@angular/core';
import { Cajero } from 'src/app/interfaces/cajero.interface';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {
  cajeros: Cajero[];

  constructor() { }

  registrarCajero(cajero: Cajero) {
    this.cajeros.push(cajero);
  }
}
