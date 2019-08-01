import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Area } from 'src/app/dto/area.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BackendService<Area> {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/area');
   }
}
