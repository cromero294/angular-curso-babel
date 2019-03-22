import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'lista', pathMatch: 'full' },
    { path: 'lista', component: ListaComponent},
    { path: 'form', component: FormComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);