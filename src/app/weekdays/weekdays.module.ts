import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdaysListComponent } from './weekdays-list/weekdays-list.component';
import { WeekdayComponent } from './weekday/weekday.component';

@NgModule({
  declarations: [WeekdaysListComponent, WeekdayComponent],
  imports: [CommonModule],
  exports: [WeekdaysListComponent, WeekdayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeekdaysModule {}
