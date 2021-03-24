import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TurnosEditComponent } from './turnos-edit.component';
import { TurnosService } from '../turnos.service';

describe('TurnosEditComponent', () => {
  let component: TurnosEditComponent;
  let fixture: ComponentFixture<TurnosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TurnosEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TurnosService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
