import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBPage } from './product-b';
import { DocumentViewer } from '@ionic-native/document-viewer';

@NgModule({
  declarations: [
    ProductBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProductBPage),
  ],
  providers: [
    DocumentViewer
  ]
})
export class ProductBPageModule {}
