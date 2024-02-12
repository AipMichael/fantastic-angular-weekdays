import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdaysListComponent } from './weekdays-list/weekdays-list.component';
import { WeekdayComponent } from './weekday/weekday.component';

@NgModule({
  declarations: [WeekdaysListComponent, WeekdayComponent],
  imports: [CommonModule],
  exports: [WeekdaysListComponent],
})
export class WeekdaysModule {}
