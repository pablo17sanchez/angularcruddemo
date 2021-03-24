import { TestBed } from '@angular/core/testing';
import { PruebaService } from './prueba.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PruebaService', () => {
  let service: PruebaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PruebaService]
    });

    service = TestBed.get(PruebaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
