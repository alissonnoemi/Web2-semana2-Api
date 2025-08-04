import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const autenticaGuard: CanActivateFn = (route, state) => {
  /*const router = inject(Router);
  const loginExitoso=localStorage.getItem('user');
 if(loginExitoso){
    return true;
  }else{
     return router.parseUrl('/');
  }*/
 const authServcio = inject (AutenticacionService);
 const router = inject(Router);
 if(authServcio.sesionIniciada()){
  return true;
 }else{
  localStorage.setItem('redirectUrl', state.url);
  return router.parseUrl('/login');
 }
 
};
