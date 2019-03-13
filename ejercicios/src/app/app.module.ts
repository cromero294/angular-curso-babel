import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpEj2Component } from './cmp-ej2/cmp-ej2.component';
import { OcultarPipe } from './ocultar.pipe';
import { CmpPadreComponent } from './cmp-padre/cmp-padre.component';
import { FormComponent } from './cmp-padre/form/form.component';
import { CvComponent } from './cmp-padre/cv/cv.component';
import { CmpPowercodeComponent } from './cmp-powercode/cmp-powercode.component';
import { PowerDirective } from './cmp-powercode/power.directive';

@NgModule({
  declarations: [
    AppComponent,
    CmpEj2Component,
    OcultarPipe,
    CmpPadreComponent,
    FormComponent,
    CvComponent,
    CmpPowercodeComponent,
    PowerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
