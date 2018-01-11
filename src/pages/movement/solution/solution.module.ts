import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionPage } from './solution';

@NgModule({
  declarations: [
    SolutionPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SolutionPage),
  ],
})
export class SolutionPageModule {}
