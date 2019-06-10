import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/app/producto.service';
import { Producto } from 'src/app/interfaces/producto.inteface';
import { ComprasService } from 'src/app/servicios/app/compras.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos = this._productoService.productos;

  constructor(
    private readonly _productoService: ProductoService,
    private readonly _compraService: ComprasService
  ) { }

  ngOnInit() {
  }

  incrementarCantidadDetalle(producto: Producto) {
    this._compraService.incrementarCantidadDetalle(producto);
  }

}
