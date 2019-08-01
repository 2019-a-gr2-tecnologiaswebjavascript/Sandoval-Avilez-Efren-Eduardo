import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class BackendService <Entidad> {
  protected url = 'http://localhost:1337';
  protected modelo = '';

  constructor(protected readonly httpClient: HttpClient,
              url: string,
              modelo: string) {
        this.url = url;
        this.modelo = modelo;
  }

  crear(nuevoRegistro: Entidad): Observable<Entidad> {
    const url = `${this.url}${this.modelo}`;
    return this.httpClient
                .post(url, nuevoRegistro)
                .pipe(
                    map(
                        (datos) => {
                            return datos as Entidad;
                    })
                );
  }

  buscarPorParametro(parametro: any): Observable<Entidad> {
    const url = `${this.url}${this.modelo}`;
    return this.httpClient
                .get(url)
                .pipe(
                  map(
                    datos => {
                      return datos as Entidad;
                    })
                );
  }
}
