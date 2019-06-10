import { CabeceraFactura } from './cabecera-factura.interface';
import { DetalleFactura } from './detalle-factura.interfaces';

export interface Factura {
    cabeceraFactura: CabeceraFactura;
    detallesFactura: DetalleFactura[];
}
