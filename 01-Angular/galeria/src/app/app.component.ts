import { Component } from '@angular/core';

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
      descripcion: 'HB'
    },
    {
      titulo: 'Don Pepito',
      nombre: 'Borrador',
      descripcion: 'De queso'
    },
    {
      titulo: 'Doña Maria',
      nombre: 'Tinta',
      descripcion: 'Azul'
    }
  ];

  cambioMontania(evento: boolean) {
    this.clase = 'amarillo';
  }

  cambioPlaya(evento: boolean) {
    this.clase = 'rojo';
  }
}
