import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysListComponent } from './weekdays-list.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeekdayComponent } from '../weekday/weekday.component';

describe('WeekdaysListComponent', () => {
  let component: WeekdaysListComponent;
  let fixture: ComponentFixture<WeekdaysListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdaysListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(WeekdaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const weekdayListComponent = new WeekdaysListComponent();
    expect(component).toBeTruthy();
    expect(weekdayListComponent.weekdays)
      .withContext('This is my context')
      .toBe([]);
  });
});
