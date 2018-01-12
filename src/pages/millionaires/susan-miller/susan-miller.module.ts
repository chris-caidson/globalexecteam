import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SusanMillerPage } from './susan-miller';

@NgModule({
  declarations: [
    SusanMillerPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(SusanMillerPage),
  ],
})
export class SusanMillerPageModule {}
