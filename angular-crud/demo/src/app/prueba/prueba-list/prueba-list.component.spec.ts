import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PruebaListComponent } from './prueba-list.component';
import { PruebaService } from '../prueba.service';

describe('PruebaListComponent', () => {
  let component: PruebaListComponent;
  let fixture: ComponentFixture<PruebaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PruebaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
