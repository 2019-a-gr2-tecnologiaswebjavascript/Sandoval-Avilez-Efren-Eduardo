import { Component, OnInit } from '@angular/core';
import { CajeroService } from '../servicios/app/cajero.service';
import { Cajero } from '../interfaces/cajero.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-cajero',
  templateUrl: './registro-cajero.component.html',
  styleUrls: ['./registro-cajero.component.css']
})
export class RegistroCajeroComponent implements OnInit {

  nombreCajero: string;
  apellidoCajero: string;
  mensajeValidacion = '';

  constructor(
    private readonly _cajeroService: CajeroService,
    private readonly $activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.$activatedRoute.queryParams.subscribe(params => {
      this.nombreCajero = params['nombre'];
      this.apellidoCajero = params['apellido'];
    });
  }

  registrarCajero() {
    const cajero: Cajero = {
      nombreCajero: this.nombreCajero,
      apellidoCajero: this.apellidoCajero
    };
    this.mensajeValidacion = this._cajeroService.registrarCajero(cajero);
  }

}
