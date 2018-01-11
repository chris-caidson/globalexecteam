import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatItLoveItShareItPage } from './eat-it-love-it-share-it';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    EatItLoveItShareItPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EatItLoveItShareItPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class EatItLoveItShareItPageModule {}
