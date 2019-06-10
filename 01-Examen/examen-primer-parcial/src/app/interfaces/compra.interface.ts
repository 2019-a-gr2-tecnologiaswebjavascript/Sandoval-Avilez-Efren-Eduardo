import { Factura } from './factura.interface';

export interface Compra {
    nombreCajeroAtendioCompra: string;
    factura: Factura;
}
