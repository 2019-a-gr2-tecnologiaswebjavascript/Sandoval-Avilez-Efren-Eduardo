import { Injectable } from '@angular/core';
import { ItemCarritoComprasInterface } from '../../../interfaces/item-carrito-compras-interface';

@Injectable()
export class CarritoService {

    carritosCompras = [];

    carritoCompras: ItemCarritoComprasInterface[] = [];

    agregarCarritoDeCompras(itemCarrito: ItemCarritoComprasInterface): ItemCarritoComprasInterface[] {
        const identificador = itemCarrito.valor;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (item: ItemCarritoComprasInterface, indice) => {
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

    private anadirAlCarrito(item: ItemCarritoComprasInterface) {
        item.cantidad = 1;
        this.carritoCompras.splice(0, 0, item);
    }
}
