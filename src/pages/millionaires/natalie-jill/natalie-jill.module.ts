import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NatalieJillPage } from './natalie-jill';

@NgModule({
  declarations: [
    NatalieJillPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(NatalieJillPage),
  ],
})
export class NatalieJillPageModule {}
