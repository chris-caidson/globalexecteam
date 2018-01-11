import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompensationPlanPage } from './compensation-plan';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    CompensationPlanPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CompensationPlanPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class CompensationPlanPageModule {}
