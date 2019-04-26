import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {

    carritoCompras: ItemCarritoCompras[] = [];

    agregarCarritoDeCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras[] {
        const identificador = itemCarrito.valor;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item: ItemCarritoCompras, indice) => {
                if (item.valor === identificador) {
                    indiceItem = indice;
                    return true;
                } else {
                    return false;
                }
                return item.valor === identificador;
            }
        );
        if (existeElItem) {
            this.anadirAlContador(indiceItem);
        } else {
            this.anadirAlCarrito(itemCarrito);
        }

        console.log('Se añadio al carrito', itemCarrito);
        return this.carritoCompras;
    }

    private anadirAlContador(indice: number) {
        this.carritoCompras[indice].cantidad++;
    }

    private anadirAlCarrito(item: ItemCarritoCompras) {
        item.cantidad = 1;
        this.carritoCompras.splice(0, 0, item);
    }
}
