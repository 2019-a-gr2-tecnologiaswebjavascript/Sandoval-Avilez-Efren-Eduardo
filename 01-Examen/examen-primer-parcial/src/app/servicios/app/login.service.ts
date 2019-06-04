import { Injectable } from '@angular/core';
import { Cajero } from 'src/app/interfaces/cajero.interface';
import { CajeroService } from './cajero.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private readonly _authService: AuthService) { }

    login(cajeroPorVerificar: Cajero): string {
        let mensaje: string;
        if (this._authService.login(cajeroPorVerificar)) {
            mensaje = 'Acceso correcto.';
        } else {
            mensaje = 'Acceso denegado. Su usuario o contraseña son erróneos por favor vuelva a intentarlo.';
        }
        return mensaje;
    }
}
