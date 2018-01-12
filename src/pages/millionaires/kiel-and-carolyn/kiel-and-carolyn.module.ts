import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KielAndCarolynPage } from './kiel-and-carolyn';

@NgModule({
  declarations: [
    KielAndCarolynPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(KielAndCarolynPage),
  ],
})
export class KielAndCarolynPageModule {}
