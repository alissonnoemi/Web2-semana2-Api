import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarioComponent } from '../components/registro-usuario/registro-usuario.component';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuarioComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.camposSinLlenar()){
    return confirm('Tienes datos sin llenar. ¿Seguro de abandonar el registro?')
  }
  return true;
};
