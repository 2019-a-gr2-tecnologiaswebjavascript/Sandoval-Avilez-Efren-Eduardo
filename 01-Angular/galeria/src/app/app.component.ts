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

  arregloElementosPapeleria = [
    {
      titulo: 'Don Jose',
      nombre: 'Lapiz',
      descripcion: 'HB',
      notas: ['Hot Dog', 'Hamburguesas']
    },
    {
      titulo: 'Don Pepito',
      nombre: 'Borrador',
      descripcion: 'De queso',
      notas: []
    },
    {
      titulo: 'Doña Maria',
      nombre: 'Tinta',
      descripcion: 'Azul'
    }
  ];

  constructor(private readonly _carritoService: CarritoService) {}

  cambioMontania(evento: boolean) {
    this.clase = 'amarillo';
  }

  cambioPlaya(evento: boolean) {
    this.clase = 'rojo';
  }
}
