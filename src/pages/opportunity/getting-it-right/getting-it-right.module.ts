import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GettingItRightPage } from './getting-it-right';

@NgModule({
  declarations: [
    GettingItRightPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GettingItRightPage),
  ]
})
export class GettingItRightPageModule {}
