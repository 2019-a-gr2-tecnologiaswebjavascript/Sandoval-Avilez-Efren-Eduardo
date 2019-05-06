import { Component } from '@angular/core';
import { ItemMenu } from '../interfaces/item-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Tablita del Tártaro';

  itemsMenu: ItemMenu [] = [
    {
      nombreItem: 'parrilladas',
      ubicacionImagenItem: '../../assets/imagenes/parrillada.png',
      textoAlternativoImagenItem: 'Fotografia parrillada.'
    },
    {
      nombreItem: 'lomos',
      ubicacionImagenItem: '../../assets/imagenes/lomo.png',
      textoAlternativoImagenItem: 'Fotografia lomo.'
    },
    {
      nombreItem: 'costillas bbq',
      ubicacionImagenItem: '../../assets/imagenes/costillas.png',
      textoAlternativoImagenItem: 'Fotografia costillas bbq.'
    },
    {
      nombreItem: 'hamburguesas',
      ubicacionImagenItem: '../../assets/imagenes/hamburguesas.png',
      textoAlternativoImagenItem: 'Fotografia hamburguesas.'
    },
    {
      nombreItem: 'bajo en grasa',
      ubicacionImagenItem: '../../assets/imagenes/bajo-grasa.png',
      textoAlternativoImagenItem: 'Fotografia filete de pollo asado.'
    },
    {
      nombreItem: 'promociones',
      ubicacionImagenItem: '../../assets/imagenes/promocion.png',
      textoAlternativoImagenItem: 'Fotografia promociones.'
    }
  ];
}
