import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cajero',
  templateUrl: './login-cajero.component.html',
  styleUrls: ['./login-cajero.component.css']
})
export class LoginCajeroComponent implements OnInit {

  nombreCajero: string;
  apellidoCajero: string;

  constructor() { }

  ngOnInit() {
  }

  guardarUsuario(formulario) {
    console.log(this.nombreCajero + this.apellidoCajero);
  }

}
