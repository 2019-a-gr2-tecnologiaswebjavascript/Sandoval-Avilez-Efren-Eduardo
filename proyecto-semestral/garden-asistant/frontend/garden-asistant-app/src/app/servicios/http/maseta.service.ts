import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Maseta } from 'src/app/dto/maseta.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasetaService extends BackendService<Maseta> {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/maseta');
   }
}
