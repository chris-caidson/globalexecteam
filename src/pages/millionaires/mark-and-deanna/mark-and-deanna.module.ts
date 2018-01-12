import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkAndDeannaPage } from './mark-and-deanna';

@NgModule({
  declarations: [
    MarkAndDeannaPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(MarkAndDeannaPage),
  ],
})
export class MarkAndDeannaPageModule {}
