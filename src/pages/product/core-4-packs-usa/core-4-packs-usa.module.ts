import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Core_4PacksUsaPage } from './core-4-packs-usa';

@NgModule({
  declarations: [
    Core_4PacksUsaPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Core_4PacksUsaPage),
  ],
})
export class Core_4PacksUsaPageModule {}
