import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsaleanShakePage } from './isalean-shake';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    IsaleanShakePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsaleanShakePage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class IsaleanShakePageModule {}
