import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private http: HttpClient) {
    this.http.get<Usuario>('assets/usuario.json').subscribe((data) => {
      this.usuarioValido = {
        usuario: data.usuario,
        password: data.password,
      };
    });
  }
  private usuarioValido = {
    usuario: '',
    password: '',
  };
  validarUsuario(usuario: string, password: string): boolean {
    if (
      usuario === this.usuarioValido.usuario &&
      password === this.usuarioValido.password
    ) {
      localStorage.setItem('user', usuario);
      return true;
    } else {
      return false;
    }
  }
  sesionIniciada = () => {
    return localStorage.getItem('user') !== null;
  };
  logout = () => {
    localStorage.removeItem('user');
  };
}
