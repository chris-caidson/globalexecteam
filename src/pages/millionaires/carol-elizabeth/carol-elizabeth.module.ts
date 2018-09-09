import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarolElizabethPage } from './carol-elizabeth';

@NgModule({
  declarations: [
    CarolElizabethPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CarolElizabethPage),
  ],
})
export class CarolElizabethPageModule {}
