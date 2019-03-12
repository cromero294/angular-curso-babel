import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, args?: string): Array<string> {
    return value.filter(nombre => nombre.match(new RegExp(args, 'i')));
  }

}
