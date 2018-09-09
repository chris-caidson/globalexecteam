import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetOurCofounderPage } from './meet-our-cofounder';

@NgModule({
  declarations: [
    MeetOurCofounderPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MeetOurCofounderPage),
  ],
})
export class MeetOurCofounderPageModule {}
