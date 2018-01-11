import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonixSupremePage } from './ionix-supreme';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    IonixSupremePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IonixSupremePage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class IonixSupremePageModule {}
