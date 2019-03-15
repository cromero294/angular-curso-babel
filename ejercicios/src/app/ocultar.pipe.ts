import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, arg1?: Array<string>, arg2: string='*'): string {
    
    arg1.forEach(palabra => value = value.replace(new RegExp(palabra, "gi"), arg2.repeat(palabra.length)));

    return value;
  }

}
