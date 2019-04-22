import { Injectable } from '@angular/core';
import { ItemCarritoComprasInterface, ItemCarritoCompras } from 'src/interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
carritoCompras: ItemCarritoCompras[] = [];

agregarCarritoDeCompras(itemCarrito: ItemCarritoCompras): ItemCarritoCompras[] {
    const identificador = itemCarrito.valor;
    const existeElItem = this.carritoCompras.some(
        (item: ItemCarritoCompras, indice) => {
            if (item.valor === identificador) {
                return 
            }
            return item.valor === identificador;
        }
    );
}

agregarCarrito(valorCarrito: number) {
    const itemCarrito = {
      valor: valorCarrito,
      nombreTienda: this.titulo
    };

    this._carritoService.carritoCompras.splice(0, 0, itemCarrito);
  }

}
