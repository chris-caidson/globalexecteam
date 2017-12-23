import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthToWealthPage } from './health-to-wealth';

@NgModule({
  declarations: [
    HealthToWealthPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthToWealthPage),
  ],
})
export class HealthToWealthPageModule {}
