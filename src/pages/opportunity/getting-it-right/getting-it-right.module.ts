import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GettingItRightPage } from './getting-it-right';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    GettingItRightPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GettingItRightPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class GettingItRightPageModule {}
