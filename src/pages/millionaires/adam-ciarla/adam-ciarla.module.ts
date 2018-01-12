import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdamCiarlaPage } from './adam-ciarla';

@NgModule({
  declarations: [
    AdamCiarlaPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(AdamCiarlaPage),
  ],
})
export class AdamCiarlaPageModule {}
