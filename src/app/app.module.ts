import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListadoContactosComponent } from './componentes/listado-contactos/listado-contactos.component';
import { FormularioContactosComponent } from './componentes/formulario-contactos/formulario-contactos.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';

let rutas = [
  { path : '',
    component : ListadoContactosComponent
  },
  { path : 'listadoContactos',
    component : ListadoContactosComponent
  },
  { path : 'formularioContactos',
    component : FormularioContactosComponent
  },
  { path : 'formularioContactos/:id',
    component : FormularioContactosComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    ListadoContactosComponent,
    FormularioContactosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Para que funcionen los [(ngModel)]
    RouterModule.forRoot(rutas), //Para tener <router-outlet>
    HttpClientModule //Para disponer del objeto HttpClient
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
