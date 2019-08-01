import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Nivel } from 'src/app/dto/nivel.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NivelService extends BackendService<Nivel> {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/nivel');
   }
}
