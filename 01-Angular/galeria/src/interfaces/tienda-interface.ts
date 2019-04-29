import { CarritoComprasInterface } from './carrito-compras-interface';

export interface TiendaInterface {
    nombreTienda: string;
    carritoComprasTienda?: CarritoComprasInterface;
}
