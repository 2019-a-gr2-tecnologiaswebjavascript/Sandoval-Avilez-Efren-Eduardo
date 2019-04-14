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

  alertar() {
    alert('Pasando mensajes al padre desde ' + this.nombreItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
