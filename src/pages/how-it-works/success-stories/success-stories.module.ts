import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessStoriesPage } from './success-stories';

@NgModule({
  declarations: [
    SuccessStoriesPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SuccessStoriesPage),
  ],
})
export class SuccessStoriesPageModule {}
