import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SciencePage } from './science';

@NgModule({
  declarations: [
    SciencePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SciencePage),
  ],
})
export class SciencePageModule {}
