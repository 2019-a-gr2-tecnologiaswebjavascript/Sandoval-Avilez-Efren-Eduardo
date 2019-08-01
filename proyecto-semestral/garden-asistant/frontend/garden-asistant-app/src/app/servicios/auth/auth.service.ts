import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../http/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado = false;
  roles = [];

  // tslint:disable-next-line:variable-name
  constructor(private readonly _router: Router,
              // tslint:disable-next-line:variable-name
              private readonly _usuarioService: UsuarioService) { }

  login(usuario: string, password: string) {
    const usuarioRecuperado$ = this._usuarioService.buscarPorParametro(usuario);
    usuarioRecuperado$
      .subscribe(
        usuarioLocal => {
          if (usuarioLocal.passwordUsuario === password) {
            this.estaLogeado = true;
            const url = ['/catalogo'];
            this._router.navigate(url);
          } else {
            console.log('Contraseña errada.');
          }
        },
        error => {
          console.log('Usuario no existe.');
        }
      );
  }

  logout() {
    this.estaLogeado = false;
  }
}
