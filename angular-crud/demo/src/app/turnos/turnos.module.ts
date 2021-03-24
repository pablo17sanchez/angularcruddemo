import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TurnosListComponent } from './turnos-list/turnos-list.component';
import { TurnosEditComponent } from './turnos-edit/turnos-edit.component';
import { TurnosService } from './turnos.service';
import { TURNOS_ROUTES } from './turnos.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TURNOS_ROUTES)
  ],
  declarations: [
    TurnosListComponent,
    TurnosEditComponent
  ],
  providers: [TurnosService],
  exports: []
})
export class TurnosModule { }
