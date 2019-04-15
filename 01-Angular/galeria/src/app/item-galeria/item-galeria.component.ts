import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Papeleria';

  @Input()
  nombreItem;

  @Input()
  textoBoton;

  urlImagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Madre_e_hija_disfrutando_de_la_playa_de_Newport%2C_California.JPG/1200px-Madre_e_hija_disfrutando_de_la_playa_de_Newport%2C_California.JPG";

  alertar() {
    alert('Pasando mensajes al padre desde ' + this.nombreItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
