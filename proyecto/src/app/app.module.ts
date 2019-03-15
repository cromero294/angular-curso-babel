import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { MiElseDirective } from './cmp-directivas/mi-else.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpEjercicioToDoComponent } from './cmp-ejercicio-to-do/cmp-ejercicio-to-do.component';
import { TacharDirective } from './cmp-ejercicio-to-do/tachar.directive';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { FormPlantillaComponent } from './cmp-formularios/form-plantilla/form-plantilla.component';
import { FormReactivoComponent } from './cmp-formularios/form-reactivo/form-reactivo.component';

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
    CmpDirectivasComponent,
    MarcarDirective,
    MiElseDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpEjercicioToDoComponent,
    TacharDirective,
    CmpFormulariosComponent,
    FormPlantillaComponent,
    FormReactivoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
