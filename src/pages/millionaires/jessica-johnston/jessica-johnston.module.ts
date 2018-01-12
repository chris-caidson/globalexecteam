import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JessicaJohnstonPage } from './jessica-johnston';

@NgModule({
  declarations: [
    JessicaJohnstonPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(JessicaJohnstonPage),
  ],
})
export class JessicaJohnstonPageModule {}
