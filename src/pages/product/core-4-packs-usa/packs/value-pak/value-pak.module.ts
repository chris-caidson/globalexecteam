import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValuePakPage } from './value-pak';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    ValuePakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ValuePakPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class ValuePakPageModule {}
