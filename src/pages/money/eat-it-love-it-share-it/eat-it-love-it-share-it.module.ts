import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatItLoveItShareItPage } from './eat-it-love-it-share-it';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    EatItLoveItShareItPage
  ],
  imports: [
    ComponentsModule,
    PdfViewerModule,
    IonicPageModule.forChild(EatItLoveItShareItPage),
  ]
})
export class EatItLoveItShareItPageModule {}
