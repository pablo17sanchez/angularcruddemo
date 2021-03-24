import { TestBed } from '@angular/core/testing';
import { TurnosService } from './turnos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TurnosService', () => {
  let service: TurnosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TurnosService]
    });

    service = TestBed.get(TurnosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
