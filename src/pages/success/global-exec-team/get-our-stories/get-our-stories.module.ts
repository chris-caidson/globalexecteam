import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetOurStoriesPage } from './get-our-stories';

@NgModule({
  declarations: [
    GetOurStoriesPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GetOurStoriesPage),
  ],
})
export class GetOurStoriesPageModule {}
