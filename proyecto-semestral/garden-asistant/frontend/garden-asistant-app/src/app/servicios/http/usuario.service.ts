import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Usuario } from 'src/app/dto/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BackendService<Usuario> {

  // tslint:disable-next-line:variable-name
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/usuario');
  }
}
