import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScientificAdvisoryBoardPage } from './scientific-advisory-board';

@NgModule({
  declarations: [
    ScientificAdvisoryBoardPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScientificAdvisoryBoardPage),
  ],
})
export class ScientificAdvisoryBoardPageModule {}
