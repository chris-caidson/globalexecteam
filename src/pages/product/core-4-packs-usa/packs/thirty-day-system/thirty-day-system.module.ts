import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirtyDaySystemPage } from './thirty-day-system';

@NgModule({
  declarations: [
    ThirtyDaySystemPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ThirtyDaySystemPage),
  ]
})
export class ThirtyDaySystemPageModule {}
