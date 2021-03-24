import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PruebaService } from '../prueba.service';
import { Prueba } from '../prueba';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-prueba-edit',
  templateUrl: './prueba-edit.component.html'
})
export class PruebaEditComponent implements OnInit {

  id: string;
  prueba: Prueba;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pruebaService: PruebaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Prueba()); }

          console.log( this.pruebaService.findById(id));
          return this.pruebaService.findById(id);
        })
      )
      .subscribe(prueba => {
          this.prueba = prueba;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.pruebaService.save(this.prueba).subscribe(
      prueba => {
        this.prueba = prueba;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/pruebas']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/pruebas']);
  }
}
