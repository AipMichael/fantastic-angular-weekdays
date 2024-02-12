import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeekdaysModule } from './weekdays/weekdays.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WeekdaysModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
