import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanseForLifePage } from './cleanse-for-life';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    CleanseForLifePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CleanseForLifePage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class CleanseForLifePageModule {}
