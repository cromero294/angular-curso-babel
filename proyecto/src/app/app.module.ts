import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { Hijo1Component } from './cmp-databinding/hijo1/hijo1.component';
import { Hijo2Component } from './cmp-databinding/hijo2/hijo2.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CmpDatabindingComponent,
    Hijo1Component,
    Hijo2Component,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    FiltroPipe,
    CmpDirectivasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
