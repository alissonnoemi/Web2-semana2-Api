import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor() {}
  private usuarioValido = {
    usuario: 'admin',
    password: '123'
  };

  validarUsuario(usuario: string, password: string): boolean {
    if (usuario === this.usuarioValido.usuario && password === this.usuarioValido.password) {
      localStorage.setItem('user', usuario);
      return true;
    } else {
      return false;
    }
  }
  sesionIniciada=()=>{
    return localStorage.getItem('user')!==null
  }
  logout=()=>{
    localStorage.removeItem('user');
  }
}
