import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, arg1: number = 0, arg2?: number): number {
    return value*2 + arg1 - arg2;
  }

}
