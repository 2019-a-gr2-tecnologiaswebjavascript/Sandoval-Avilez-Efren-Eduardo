import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/app/login.service';
import { Cajero } from '../interfaces/cajero.interface';

@Component({
  selector: 'app-login-cajero',
  templateUrl: './login-cajero.component.html',
  styleUrls: ['./login-cajero.component.css']
})
export class LoginCajeroComponent implements OnInit {

  nombreCompletoCajero: string;

  mensajeValidacion: string;

  constructor(
    private readonly _loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    const cajeroParaValidar: Cajero = {
      nombreCajero: this.nombreCompletoCajero.split(' ')[0],
      apellidoCajero: this.nombreCompletoCajero.split(' ')[1]
    };
    console.log(cajeroParaValidar);
    this.mensajeValidacion = this._loginService.login(cajeroParaValidar);
  }

}
