import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetOurMissionPage } from './get-our-mission';

@NgModule({
  declarations: [
    GetOurMissionPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetOurMissionPage),
  ],
})
export class GetOurMissionPageModule {}
