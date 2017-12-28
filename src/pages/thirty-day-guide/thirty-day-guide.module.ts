import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirtyDayGuidePage } from './thirty-day-guide';

@NgModule({
  declarations: [
    ThirtyDayGuidePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ThirtyDayGuidePage),
  ],
})
export class ThirtyDayGuidePageModule {}
