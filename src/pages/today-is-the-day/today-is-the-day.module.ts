import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayIsTheDayPage } from './today-is-the-day';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    TodayIsTheDayPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TodayIsTheDayPage),
  ],
})
export class TodayIsTheDayPageModule {}
