import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Directive({
  selector: '[appPower]'
})
export class PowerDirective {
  
  @HostBinding('style.marginTop') top;
  @HostBinding('style.marginLeft') left;
  @HostBinding('style.backgroundColor') bcolor;
  @HostBinding('style.color') color;
  @HostBinding('style.width') w;
  @HostBinding('style.length') l;
  @HostBinding('style.fontSize') s;

  @Input('appPower') text;
  auxTop = 250;
  auxLeft = 500;

  constructor() { }

  @HostListener('keydown') onKeyDown(){
    let ran1 = Math.floor(Math.random()*2);
    let ran2 = Math.floor(Math.random()*2);

    console.log(this.text.length);

    if(this.text.length > 100) {
      this.bcolor = 'yellow';
      this.color = 'blue';
      this.w = 700 + 'px';
      this.l = 500 + 'px';
      this.s = 200 + 'px';
    }

    if(ran1){
      this.auxTop += 1;
    }else{
      this.auxTop -= 1;
    }

    if(ran2){
      this.auxLeft += 1;
    }else{
      this.auxLeft -= 1;
    }

    this.top = this.auxTop + 'px';
    this.left = this.auxLeft + 'px';
  }
}
