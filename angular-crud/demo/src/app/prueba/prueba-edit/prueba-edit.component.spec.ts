import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PruebaEditComponent } from './prueba-edit.component';
import { PruebaService } from '../prueba.service';

describe('PruebaEditComponent', () => {
  let component: PruebaEditComponent;
  let fixture: ComponentFixture<PruebaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PruebaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
