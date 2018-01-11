import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarterPakPage } from './starter-pak';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    StarterPakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StarterPakPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class StarterPakPageModule {}
