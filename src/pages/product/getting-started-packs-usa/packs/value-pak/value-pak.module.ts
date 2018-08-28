import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValuePakPage } from './value-pak';

@NgModule({
  declarations: [
    ValuePakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ValuePakPage),
  ]
})
export class ValuePakPageModule {}
