import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwardsPage } from './awards';

@NgModule({
  declarations: [
    AwardsPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AwardsPage),
  ],
})
export class AwardsPageModule {}
