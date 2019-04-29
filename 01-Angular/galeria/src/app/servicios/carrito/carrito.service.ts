import { Injectable } from '@angular/core';
import { ItemCarritoComprasInterface } from '../../../interfaces/item-carrito-compras-interface';
import { TiendaInterface } from 'src/interfaces/tienda-interface';
import { CarritoComprasInterface } from 'src/interfaces/carrito-compras-interface';

@Injectable()
export class CarritoService {

    arregloTiendas: TiendaInterface[] = [];

    carritoCompras: ItemCarritoComprasInterface[] = [];

    agregarCarritoDeCompras(
        item: ItemCarritoComprasInterface,
        carrito: CarritoComprasInterface,
        tienda: TiendaInterface
    ): TiendaInterface[] {

        const nombreTienda = tienda.nombreTienda;
        const identificador = item.nombreProducto;
        let indiceTienda = -1;
        let indiceItem = -1;

        const existeTienda = this.arregloTiendas.some(
            (tienda: TiendaInterface, indice) => {
                if (tienda.nombreTienda === nombreTienda) {
                    indiceTienda = indice;
                    const existeElItem = tienda.carritoComprasTienda.arregloItemsCarritoCompras.some(
                        (item: ItemCarritoComprasInterface, indice) => {
                            if (item.nombreProducto === identificador) {
                                indiceItem = indice;
                                return true;
                            } else {
                                return false;
                            }
                        }
                    );
                    if (existeElItem) {
                        this.anadirAlContador(indiceTienda, indiceItem);
                    } else {
                        this.anadirAlCarrito(indiceTienda, item);
                    }
                    return true;
                } else {
                    return false;
                }
            }
        );

        if (existeTienda) {
            console.log('Ya no hay nada más que hacer');
        } else {
            const tiendaCompleta: TiendaInterface = tienda;
            tiendaCompleta.carritoComprasTienda = carrito;
            tiendaCompleta.carritoComprasTienda.arregloItemsCarritoCompras.splice(0, 0, item);
        }



        console.log('Se añadio al carrito', item);
        return this.arregloTiendas;
    }

    private anadirAlContador(indiceTienda: number, indiceItem: number) {
        this.arregloTiendas[indiceTienda].carritoComprasTienda[indiceItem].cantidad++;
    }

    private anadirAlCarrito(indiceTienda: number, item: ItemCarritoComprasInterface) {
        item.cantidad = 1;
        this.arregloTiendas[indiceTienda].carritoComprasTienda.arregloItemsCarritoCompras.splice(0, 0, item);
    }

    private anadirTienda(tienda: TiendaInterface) {
        tienda.carritoComprasTienda.arregloItemsCarritoCompras[0].cantidad = 1;
        this.arregloTiendas.push(tienda);
    }
}
