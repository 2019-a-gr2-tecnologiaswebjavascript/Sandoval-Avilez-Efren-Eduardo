import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-busqueda-tiendas',
  templateUrl: './barra-busqueda-tiendas.component.html',
  styleUrls: ['./barra-busqueda-tiendas.component.css']
})
export class BarraBusquedaTiendasComponent implements OnInit {

  nombreTienda: string;

  constructor() { }

  ngOnInit() {
  }

  buscarPorNombreTienda() {
    //aquí va la lógica del llamado al método búsqueda del servicio: tienda-service
  }

}
