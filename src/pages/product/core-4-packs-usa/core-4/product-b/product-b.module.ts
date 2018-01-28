import { ComponentsModule } from './../../../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsaGenesisPage } from './product-b';

@NgModule({
  declarations: [
    IsaGenesisPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsaGenesisPage),
  ]
})
export class IsaGenesisPageModule {}
