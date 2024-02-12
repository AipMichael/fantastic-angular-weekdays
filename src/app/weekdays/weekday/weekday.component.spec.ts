import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayComponent } from './weekday.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WeekdayComponent', () => {
  let component: WeekdayComponent;
  let fixture: ComponentFixture<WeekdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdayComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(WeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
