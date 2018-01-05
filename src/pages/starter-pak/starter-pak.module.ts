import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarterPakPage } from './starter-pak';

@NgModule({
  declarations: [
    StarterPakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StarterPakPage),
  ],
})
export class StarterPakPageModule {}
