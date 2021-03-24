import { Routes } from '@angular/router';
import { PruebaListComponent } from './prueba-list/prueba-list.component';
import { PruebaEditComponent } from './prueba-edit/prueba-edit.component';

export const PRUEBA_ROUTES: Routes = [
  {
    path: 'pruebas',
    component: PruebaListComponent
  },
  {
    path: 'pruebas/:id',
    component: PruebaEditComponent
  }
];
