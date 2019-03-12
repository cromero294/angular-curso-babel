import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit{

  @HostBinding('style.backgroundColor') colorFondo;
  @Input() color;

  constructor(private elemRef: ElementRef) {
    // elemRef.nativeElement.style.backgroundColor = 'blue';

   }

   ngOnInit() {
    //  this.colorFondo = 'blue';
   }

   @HostListener('mouseover') onMouseOver(){
     this.colorFondo = this.color;
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.colorFondo = 'white';
   }
}
