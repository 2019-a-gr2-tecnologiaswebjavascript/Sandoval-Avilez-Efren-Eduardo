import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/app/compras.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  parametroBusqueda: string;

  constructor(private readonly _comprasService: ComprasService) { }

  ngOnInit() {
  }

  buscarPorParametro() {
    this._comprasService.buscarCompra(this.parametroBusqueda);
  }

}
