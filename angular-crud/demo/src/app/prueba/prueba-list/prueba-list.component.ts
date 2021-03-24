import { Component, OnInit } from '@angular/core';
import { PruebaFilter } from '../prueba-filter';
import { PruebaService } from '../prueba.service';
import { Prueba } from '../prueba';

@Component({
  selector: 'app-prueba',
  templateUrl: 'prueba-list.component.html'
})
export class PruebaListComponent implements OnInit {

  filter = new PruebaFilter();
  selectedPrueba: Prueba;
  feedback: any = {};

  get pruebaList(): Prueba[] {
    return this.pruebaService.pruebaList;
  }

  constructor(private pruebaService: PruebaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.pruebaService.load(this.filter);
  }

  select(selected: Prueba): void {
    this.selectedPrueba = selected;
  }

  delete(prueba: Prueba): void {
    if (confirm('Are you sure?')) {
      this.pruebaService.delete(prueba).subscribe(() => {
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
