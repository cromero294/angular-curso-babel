import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit{

  @HostBinding('style.backgroundColor') colorFondo;
  @Input('appMarcar') color;

  constructor(private elemRef: ElementRef) {
    // elemRef.nativeElement.style.backgroundColor = 'blue';

   }

   ngOnInit() {
    //  this.colorFondo = 'blue';
     this.color = this.color ? this.color : 'blue';
   }

   @HostListener('mouseover') onMouseOver(){
     this.colorFondo = this.color;
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.colorFondo = 'white';
   }
}
