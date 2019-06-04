import { Injectable } from '@angular/core';
import { Compra } from 'src/app/interfaces/compra.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ComprasService {
    compras: Compra[] = [
      {
        numeroFactura: 1,
        nombreCajeroAtendioCompra: 'Efren Sandoval',
        nombreComprador: 'Fulanito de tal'
      },
      {
        numeroFactura: 2,
        nombreCajeroAtendioCompra: 'Efren Sandoval',
        nombreComprador: 'Perico de los Palotes'
      },
      {
        numeroFactura: 3,
        nombreCajeroAtendioCompra: 'Edison Tamayo',
        nombreComprador: 'Juana la Loca'
      }
    ];

    resultadoBusqueda: Compra[] = this.compras;

    constructor() { }

    registrarCompra(compra: Compra) {
      this.compras.push(compra);
    }

    buscarCompra(nombre: string) {
        this.resultadoBusqueda = this.compras.filter(compra => compra.nombreCajeroAtendioCompra.search(/nombre/i) ||
        compra.nombreComprador.search(/nombre/i));
    }
  }
