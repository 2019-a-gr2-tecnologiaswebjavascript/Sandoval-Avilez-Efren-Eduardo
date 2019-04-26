import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  clase = 'rojo';
  estaMostrando = false;

  arregloElementosPapeleria = [
    {
      titulo: 'Don Jose',
      nombre: 'Lapiz',
      descripcion: 'HB',
      notas: [
        'Hot Dog',
        'Hamburguesas',
        'Papitas'
      ]
    },
    {
      titulo: 'Don Pepito',
      nombre: 'Borrador',
      descripcion: 'De queso',
      notas: [
        'Papitas',
        'Empanadas'
      ]
    },
    {
      titulo: 'Doña Maria',
      nombre: 'Tinta',
      descripcion: 'Azul',
      notas: [
        'Motes',
        'Fritada',
        'Papitas'
      ]
    }
  ];

  // tslint:disable-next-line:variable-name
  constructor(private readonly _carritoService: CarritoService) {}

  cambioMontania(evento: boolean) {
    this.clase = 'amarillo';
  }

  cambioPlaya(evento: boolean) {
    this.clase = 'rojo';
  }

  mostrar(estaMostrando) {
    this.estaMostrando = estaMostrando;
  }
}
