import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeartOfIsaAdrienneDonovanPage } from './heart-of-isa-adrienne-donovan';

@NgModule({
  declarations: [
    HeartOfIsaAdrienneDonovanPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(HeartOfIsaAdrienneDonovanPage),
  ],
})
export class HeartOfIsaAdrienneDonovanPageModule {}
