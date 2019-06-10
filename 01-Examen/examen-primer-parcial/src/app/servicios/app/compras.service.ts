import { Injectable } from '@angular/core';
import { Compra } from 'src/app/interfaces/compra.interface';
import { CabeceraFactura } from 'src/app/interfaces/cabecera-factura.interface';
import { DetalleFactura } from 'src/app/interfaces/detalle-factura.interfaces';
import { Factura } from 'src/app/interfaces/factura.interface';
import { Producto } from 'src/app/interfaces/producto.inteface';

@Injectable({
    providedIn: 'root'
  })
  export class ComprasService {

    encabezadoFactura: CabeceraFactura;
    detallesFactura: DetalleFactura[];
    compras: Compra[];

    resultadoBusqueda: Compra[];

    constructor() { }

    private determinarIndiceDetalle(detalle: DetalleFactura): number {
      const indiceDetalle = this.detallesFactura.indexOf(detalle);
      return indiceDetalle;
    }

    incrementarCantidadDetalle(producto: Producto) {
      // tslint:disable-next-line:max-line-length
      const detalleRequerido = this.detallesFactura.find(detalleFactura => detalleFactura.productoDetalle.idProducto === producto.idProducto);
      const indice = this.determinarIndiceDetalle(detalleRequerido);
      this.detallesFactura[indice].cantidadDetalle += 1;
      this.detallesFactura[indice].valorDetalle = this.calculoTotalPorDetalle(this.detallesFactura[indice]); //esto es estupido pero ya nada
    }

    decrementarCantidadDetalle(detalleParaDecremento: DetalleFactura) {
      const indice = this.determinarIndiceDetalle(detalleParaDecremento);
      if (this.detallesFactura[indice].cantidadDetalle > 1) {
        this.detallesFactura[indice].cantidadDetalle -= 1;
        this.detallesFactura[indice].valorDetalle = this.calculoTotalPorDetalle(this.detallesFactura[indice]);
      } else {
        this.quitarDetalle(detalleParaDecremento);
      }
    }

    private calculoTotalPorDetalle(detalleCalculado: DetalleFactura): number {
      const valorProducto = detalleCalculado.productoDetalle.precioProducto;
      const cantidadProducto = detalleCalculado.cantidadDetalle;
      const valorDetalle = valorProducto * cantidadProducto;
      return valorDetalle;
    }

    private quitarDetalle(detallleParaEliminar: DetalleFactura) {
      const indice = this.determinarIndiceDetalle(detallleParaEliminar);
      this.detallesFactura.splice(indice, 1);
    }

    registrarCompra(nombreCajero: string) {
      const facturaCompra: Factura = {
        cabeceraFactura: this.encabezadoFactura,
        detallesFactura: this.detallesFactura
      };
      const compra: Compra = {
        nombreCajeroAtendioCompra: nombreCajero,
        factura: facturaCompra
      };
      this.compras.push(compra);
    }

    buscarCompra(nombre: string) {
        // this.resultadoBusqueda = this.compras.filter(compra => compra.nombreCajeroAtendioCompra.search(/nombre/i) ||
        // compra.nombreComprador.search(/nombre/i));
    }
  }
