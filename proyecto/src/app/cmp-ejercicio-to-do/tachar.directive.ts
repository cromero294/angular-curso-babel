import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTachar]'
})
export class TacharDirective {
  @HostBinding('style.textDecoration') colorFondo;

  constructor() { }

}
