import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemPage } from './problem';

@NgModule({
  declarations: [
    ProblemPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProblemPage),
  ],
})
export class ProblemPageModule {}
