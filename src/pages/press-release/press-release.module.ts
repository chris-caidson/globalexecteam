import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PressReleasePage } from './press-release';

@NgModule({
  declarations: [
    PressReleasePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PressReleasePage),
  ],
})
export class PressReleasePageModule {}
