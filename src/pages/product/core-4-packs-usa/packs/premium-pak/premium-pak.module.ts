import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremiumPakPage } from './premium-pak';

@NgModule({
  declarations: [
    PremiumPakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PremiumPakPage),
  ]
})
export class PremiumPakPageModule {}
