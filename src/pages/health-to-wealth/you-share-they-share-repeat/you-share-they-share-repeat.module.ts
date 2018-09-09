import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YouShareTheyShareRepeatPage } from './you-share-they-share-repeat';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    YouShareTheyShareRepeatPage
  ],
  imports: [
    ComponentsModule,
    PdfViewerModule,
    IonicPageModule.forChild(YouShareTheyShareRepeatPage),
  ]
})
export class EatItLoveItShareItPageModule {}
