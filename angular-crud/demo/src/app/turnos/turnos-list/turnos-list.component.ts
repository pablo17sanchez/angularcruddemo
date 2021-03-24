import { Component, OnInit } from '@angular/core';
import { TurnosFilter } from '../turnos-filter';
import { TurnosService } from '../turnos.service';
import { Turnos } from '../turnos';

@Component({
  selector: 'app-turnos',
  templateUrl: 'turnos-list.component.html'
})
export class TurnosListComponent implements OnInit {

  filter = new TurnosFilter();
  selectedTurnos: Turnos;
  feedback: any = {};

  get turnosList(): Turnos[] {
    return this.turnosService.turnosList;
  }

  constructor(private turnosService: TurnosService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.turnosService.load(this.filter);
  }

  select(selected: Turnos): void {
    this.selectedTurnos = selected;
  }

  delete(turnos: Turnos): void {
    if (confirm('Are you sure?')) {
      this.turnosService.delete(turnos).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
