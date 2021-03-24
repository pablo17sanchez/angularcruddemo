import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TurnosService } from '../turnos.service';
import { Turnos } from '../turnos';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-turnos-edit',
  templateUrl: './turnos-edit.component.html'
})
export class TurnosEditComponent implements OnInit {

  id: string;
  turnos: Turnos;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private turnosService: TurnosService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Turnos()); }
          return this.turnosService.findById(id);
        })
      )
      .subscribe(turnos => {
          this.turnos = turnos;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {

  //  console.log('entro');
    this.turnosService.save(this.turnos).subscribe(
      turnos => {
        this.turnos = turnos;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/turnoses']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/turnoses']);
  }
}
