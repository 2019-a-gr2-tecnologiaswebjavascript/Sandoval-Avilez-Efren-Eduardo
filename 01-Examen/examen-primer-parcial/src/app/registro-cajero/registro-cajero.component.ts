import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-cajero',
  templateUrl: './registro-cajero.component.html',
  styleUrls: ['./registro-cajero.component.css']
})
export class RegistroCajeroComponent implements OnInit {

  nombreCajero: string;
  apellidoCajero: string;

  constructor() { }

  ngOnInit() {
  }

  guardarUsuario(formulario) {
    console.log(this.nombreCajero + this.apellidoCajero);
  }

}
