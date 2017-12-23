import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayIsTheDayPage } from './today-is-the-day';

@NgModule({
  declarations: [
    TodayIsTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayIsTheDayPage),
  ],
})
export class TodayIsTheDayPageModule {}
