import { Component, OnInit, Input } from '@angular/core';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  logoTablita;

  @Input()
  textoAlternativo;

  constructor() { }

  ngOnInit() {
  }

}
