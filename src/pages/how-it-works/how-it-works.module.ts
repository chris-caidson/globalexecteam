import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowItWorksPage } from './how-it-works';

@NgModule({
  declarations: [
    HowItWorksPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HowItWorksPage),
  ],
})
export class HowItWorksPageModule {}
