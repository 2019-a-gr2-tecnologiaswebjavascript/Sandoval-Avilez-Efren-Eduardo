import { Injectable } from '@angular/core';
import { Factura } from 'src/app/interfaces/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
    facturas: Factura[];

    constructor() { }

    registarFactura(factura: Factura): string {
        let mensaje = '';
        if (this.facturas.push(factura)) {
            mensaje = 'Factura registrada exitosamente.';
        } else {
            mensaje = 'Ha ocurrido un error, la factura no pudo ser registrada';
        }
        return mensaje;
    }
}
