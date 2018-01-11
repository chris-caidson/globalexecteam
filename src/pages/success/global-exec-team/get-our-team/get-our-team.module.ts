import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetOurTeamPage } from './get-our-team';

@NgModule({
  declarations: [
    GetOurTeamPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetOurTeamPage),
  ],
})
export class GetOurTeamPageModule {}
