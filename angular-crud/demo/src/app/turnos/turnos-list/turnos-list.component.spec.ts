import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TurnosListComponent } from './turnos-list.component';
import { TurnosService } from '../turnos.service';

describe('TurnosListComponent', () => {
  let component: TurnosListComponent;
  let fixture: ComponentFixture<TurnosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TurnosListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TurnosService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
