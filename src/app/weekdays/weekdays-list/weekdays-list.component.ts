import { Component, OnInit } from '@angular/core';
import { Weekday } from 'src/types';

const today = new Date().getDay();

export const setIsToday = (dayOfWeek: number) => {
  if (dayOfWeek === today) return true;
  return false;
};

export const daysOfTheWeek: Weekday[] = [
  { name: 'Monday', isToday: setIsToday(1) },
  { name: 'Tuesday', isToday: setIsToday(2) },
  { name: 'Wednesday', isToday: setIsToday(3) },
  { name: 'Thursday', isToday: setIsToday(4) },
  { name: 'Friday', isToday: setIsToday(5) },
  { name: 'Saturday', isToday: setIsToday(6) },
  { name: 'Sunday', isToday: setIsToday(7) },
];

@Component({
  selector: 'wd-weekdays-list',
  templateUrl: './weekdays-list.component.html',
  styleUrls: ['./weekdays-list.component.css'],
})
export class WeekdaysListComponent implements OnInit {
  public weekdays: Weekday[] = [];

  ngOnInit(): void {
    this.weekdays = daysOfTheWeek;
  }
}
