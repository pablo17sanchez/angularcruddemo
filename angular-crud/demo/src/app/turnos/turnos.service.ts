import { Turnos } from './turnos';
import { TurnosFilter } from './turnos-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class TurnosService {
  turnosList: Turnos[] = [];
  api = 'https://localhost:44395/api/turnos1';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Turnos> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Turnos>(url, { params, headers });
  }

  load(filter: TurnosFilter): void {
    this.find(filter).subscribe(result => {
      this.turnosList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TurnosFilter): Observable<Turnos[]> {
    const params = {
    };

    return this.http.get<Turnos[]>(this.api, { params, headers });
  }

  save(entity: Turnos): Observable<Turnos> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;

      console.log(url);
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Turnos>(url, entity, { headers, params });
    } else {
      url = `${this.api}`;

      console.log(url);



      return this.http.post<Turnos>(url, entity, { headers, params });
    }
  }

  delete(entity: Turnos): Observable<Turnos> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Turnos>(url, { headers, params });
    }
    return null;
  }
}

