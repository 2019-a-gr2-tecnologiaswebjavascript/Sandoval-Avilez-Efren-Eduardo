import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario: string;
  passwordUsuario: string;

  // tslint:disable-next-line:variable-name
  constructor(private readonly _authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log('Estamos logeando');
    this._authService.login(this.nombreUsuario, this.passwordUsuario);
  }
  logout() {
    console.log('Saliendo del sistema');
    this._authService.logout();
  }

}
