import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/app/compras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encabezado-factura',
  templateUrl: './encabezado-factura.component.html',
  styleUrls: ['./encabezado-factura.component.css']
})
export class EncabezadoFacturaComponent implements OnInit {

  encabezado = this._comprasService.encabezadoFactura;
  private nombreCajero: string;

  constructor(
    private readonly _comprasService: ComprasService,
    private readonly $activatedRoute: ActivatedRoute
    ) { }

  registrarCompra() {
    this._comprasService.registrarCompra(this.nombreCajero);
  }

  ngOnInit() {
    this.$activatedRoute.queryParams.subscribe(params => {
      this.nombreCajero = params['nombre'] + ' ' + params['apellido'];
    });

  }

}
