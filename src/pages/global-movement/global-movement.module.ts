import { ComponentsModule } from '../../components/components.module';
import { GlobalMovementPage } from './global-movement';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GlobalMovementPage],
  imports: [ComponentsModule,
    IonicPageModule.forChild(GlobalMovementPage)]
})
export class GlobalMovementPageModule {}
