import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EditarComponent } from './editar/editar.component';

export const USUARIOS_ROUTES: Routes = [
    { path: ':id/info', component: InfoComponent },
    { path: ':id/editar', component: EditarComponent}
];