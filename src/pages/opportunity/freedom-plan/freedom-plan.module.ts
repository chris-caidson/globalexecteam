import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreedomPlanPage } from './freedom-plan';

@NgModule({
  declarations: [
    FreedomPlanPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FreedomPlanPage),
  ],
})
export class FreedomPlanPageModule {}
