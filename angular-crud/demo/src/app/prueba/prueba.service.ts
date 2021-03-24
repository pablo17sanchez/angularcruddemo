import { Prueba } from './prueba';
import { PruebaFilter } from './prueba-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PruebaService {
  pruebaList: Prueba[] = [];
  api = 'https://localhost:44395/api/pruebas';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Prueba> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Prueba>(url, { params, headers }).pipe(map(data => {


      console.log(data);
      return data;


    }));
  }

  load(filter: PruebaFilter): void {
    this.find(filter).subscribe(result => {
      this.pruebaList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PruebaFilter): Observable<Prueba[]> {
    const params = {
    };

    return this.http.get<Prueba[]>(this.api, { params, headers });
  }

  save(entity: Prueba): Observable<Prueba> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Prueba>(url, entity, { headers, params });
    } else {
      url = `${this.api}`;
      return this.http.post<Prueba>(url, entity, { headers, params });
    }
  }

  delete(entity: Prueba): Observable<Prueba> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Prueba>(url, { headers, params });
    }
    return null;
  }
}

