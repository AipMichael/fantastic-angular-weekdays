import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayComponent } from './weekday.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  daysOfTheWeek,
  setIsToday,
} from '../weekdays-list/weekdays-list.component';

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
    component.weekday = { name: 'Tuesday', isToday: setIsToday(2) };
    expect(component).toBeTruthy();
  });
});
