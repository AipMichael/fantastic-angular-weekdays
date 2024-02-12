import { Component, Input } from '@angular/core';
import { Weekday } from 'src/types';

@Component({
  selector: 'wd-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.css'],
})
export class WeekdayComponent {
  @Input({
    required: true,
  })
  public weekday!: Weekday;
}
