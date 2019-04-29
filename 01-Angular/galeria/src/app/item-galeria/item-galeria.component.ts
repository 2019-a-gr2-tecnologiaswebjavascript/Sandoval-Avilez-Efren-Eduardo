import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { ItemCarritoComprasInterface } from '../../interfaces/item-carrito-compras-interface';
import { TiendaInterface } from 'src/interfaces/tienda-interface';
import { CarritoComprasInterface } from 'src/interfaces/carrito-compras-interface';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {

  static title = 'Papeleria';

  @Input()
  titulo;

  @Input()
  nombreItem;

  @Input()
  textoBoton;

  @Input()
  notas;

  @Output()
  cambioMontania: EventEmitter<boolean> = new EventEmitter();

  @Output()
  cambioPlaya: EventEmitter<boolean> = new EventEmitter();

  urlImagen = 'https://www.demos.org/sites/default/files/blog/glacier-national-park-montana-223702.jpg';

  // tslint:disable-next-line:variable-name
  constructor(private readonly _carritoService: CarritoService) {}

  alertar() {
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  cambiarImagen() {
    const montania = 'https://www.demos.org/sites/default/files/blog/glacier-national-park-montana-223702.jpg';
      // tslint:disable-next-line:max-line-length
    const playa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Madre_e_hija_disfrutando_de_la_playa_de_Newport%2C_California.JPG/1200px-Madre_e_hija_disfrutando_de_la_playa_de_Newport%2C_California.JPG';

    if (this.urlImagen === montania) {
      this.urlImagen = playa;
      this.cambioPlaya.emit(true);
    } else {
      this.urlImagen = montania;
      this.cambioMontania.emit(true);
    }
  }

  ngOnInit() {
    console.log('Empezo');
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(): void {
    console.log('Termino');
  }

  agregarCarrito(producto: string) {

    const itemCarrito: ItemCarritoComprasInterface = {
      nombreProducto: producto
    };
    const carritoCompras: CarritoComprasInterface = {
      fechaCompra: new Date()
    };
    const tienda: TiendaInterface = {
      nombreTienda: this.titulo
    };

    const respuestaCarrito = this._carritoService.agregarCarritoDeCompras(itemCarrito, carritoCompras, tienda);
    console.log(respuestaCarrito);
  }
}
