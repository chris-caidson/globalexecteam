import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBPage } from './product-b';

@NgModule({
  declarations: [
    ProductBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProductBPage),
  ]
})
export class ProductBPageModule {}
