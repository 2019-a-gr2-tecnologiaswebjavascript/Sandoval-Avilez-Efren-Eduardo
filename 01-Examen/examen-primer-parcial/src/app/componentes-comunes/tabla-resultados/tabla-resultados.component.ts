import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/app/compras.service';
import { Compra } from 'src/app/interfaces/compra.interface';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent implements OnInit {

  resultados: Compra[] = this._comprasService.resultadoBusqueda;

  constructor(private readonly _comprasService: ComprasService) { }

  ngOnInit() {
  }

}
