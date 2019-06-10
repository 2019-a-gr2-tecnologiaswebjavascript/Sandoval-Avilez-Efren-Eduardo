import { Injectable } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

    tiendas: Tienda[];

    constructor() { }

    registrarTienda(tienda: Tienda): string {
        let mensaje = '';
        if (this.tiendas.push(tienda)) {
            mensaje = 'Tienda registrada exitosamente.';
        } else {
            mensaje = 'Ha ocurrido un error, la tienda no pudo ser registrada';
        }
        return mensaje;
    }
}
