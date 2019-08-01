import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Vivienda } from 'src/app/dto/vivienda.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService extends BackendService<Vivienda> {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/vivienda');
   }
}
