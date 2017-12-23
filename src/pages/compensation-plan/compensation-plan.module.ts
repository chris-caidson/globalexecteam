import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompensationPlanPage } from './compensation-plan';

@NgModule({
  declarations: [
    CompensationPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(CompensationPlanPage),
  ],
})
export class CompensationPlanPageModule {}
