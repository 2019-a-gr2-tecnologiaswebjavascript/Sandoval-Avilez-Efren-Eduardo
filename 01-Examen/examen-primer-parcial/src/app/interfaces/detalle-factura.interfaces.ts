import { Producto } from './producto.inteface';

export interface DetalleFactura {
    cantidadDetalle: number;
    productoDetalle: Producto;
    valorDetalle: number;
}
