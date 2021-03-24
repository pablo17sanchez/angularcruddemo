import { Routes } from '@angular/router';
import { TurnosListComponent } from './turnos-list/turnos-list.component';
import { TurnosEditComponent } from './turnos-edit/turnos-edit.component';

export const TURNOS_ROUTES: Routes = [
  {
    path: 'turnoses',
    component: TurnosListComponent
  },
  {
    path: 'turnoses/:id',
    component: TurnosEditComponent
  }
];
