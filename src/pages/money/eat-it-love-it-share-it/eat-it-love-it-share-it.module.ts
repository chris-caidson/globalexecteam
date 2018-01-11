import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatItLoveItShareItPage } from './eat-it-love-it-share-it';

@NgModule({
  declarations: [
    EatItLoveItShareItPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EatItLoveItShareItPage),
  ]
})
export class EatItLoveItShareItPageModule {}
