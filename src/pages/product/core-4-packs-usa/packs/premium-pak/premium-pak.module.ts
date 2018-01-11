import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremiumPakPage } from './premium-pak';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    PremiumPakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PremiumPakPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class PremiumPakPageModule {}
