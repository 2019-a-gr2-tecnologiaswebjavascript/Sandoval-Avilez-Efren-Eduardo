import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.css']
})
export class BarraOpcionesComponent implements OnInit {

  @Input()
  logo;

  constructor() { }

  ngOnInit() {
  }

}
