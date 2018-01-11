import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhyCleansePage } from './why-cleanse';

@NgModule({
  declarations: [
    WhyCleansePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WhyCleansePage),
  ],
})
export class WhyCleansePageModule {}
