import {ExtraOptions, Routes, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { TurnosListComponent } from './turnos/turnos-list/turnos-list.component';
import { PruebaListComponent } from './prueba/prueba-list/prueba-list.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'turnos',
    component: TurnosListComponent
  },
  {
    path: 'prueba',
    component: PruebaListComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
