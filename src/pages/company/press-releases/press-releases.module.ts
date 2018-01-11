import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PressReleasesPage } from './press-releases';

@NgModule({
  declarations: [
    PressReleasesPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PressReleasesPage),
  ],
})
export class PressReleasesPageModule {}
