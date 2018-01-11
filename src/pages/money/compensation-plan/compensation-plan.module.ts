import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompensationPlanPage } from './compensation-plan';

@NgModule({
  declarations: [
    CompensationPlanPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CompensationPlanPage),
  ]
})
export class CompensationPlanPageModule {}
