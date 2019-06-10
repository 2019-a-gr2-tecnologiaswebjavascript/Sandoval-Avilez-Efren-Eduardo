import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.inteface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

    productos: Producto[];

    constructor() { }

    registrarProducto(producto: Producto): string {
        let mensaje = '';
        if (this.productos.push(producto)) {
            mensaje = 'Producto registrado exitosamente.';
        } else {
            mensaje = 'Ha ocurrido un error, el producto no pudo ser registrado';
        }
        return mensaje;
    }
}
