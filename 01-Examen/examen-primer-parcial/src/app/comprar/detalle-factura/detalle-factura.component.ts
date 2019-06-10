import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/app/compras.service';
import { DetalleFactura } from 'src/app/interfaces/detalle-factura.interfaces';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  detalles = this._comprasService.detallesFactura;

  constructor(
    private readonly _comprasService: ComprasService
    ) { }

  ngOnInit() {
  }

  decrementarCantidadDetalle(detallePorModificar: DetalleFactura) {
    this._comprasService.decrementarCantidadDetalle(detallePorModificar);
  }
}
