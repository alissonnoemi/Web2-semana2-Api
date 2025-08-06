import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profesion',
  standalone: true
})
export class ProfesionPipe implements PipeTransform {

  transform(valor: string): string {
    if (!valor) {
      return '';
    }
    return 'Profesion: ' + valor.toLocaleUpperCase();
  }

}
