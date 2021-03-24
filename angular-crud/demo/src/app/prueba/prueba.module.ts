import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PruebaListComponent } from './prueba-list/prueba-list.component';
import { PruebaEditComponent } from './prueba-edit/prueba-edit.component';
import { PruebaService } from './prueba.service';
import { PRUEBA_ROUTES } from './prueba.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PRUEBA_ROUTES)
  ],
  declarations: [
    PruebaListComponent,
    PruebaEditComponent
  ],
  providers: [PruebaService],
  exports: []
})
export class PruebaModule { }
