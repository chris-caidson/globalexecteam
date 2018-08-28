import { ComponentsModule } from '../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GettingStartedPacksUsaPage } from './getting-started-packs-usa';

@NgModule({
  declarations: [
    GettingStartedPacksUsaPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(GettingStartedPacksUsaPage),
  ],
})
export class GettingStartedPacksUsaPageModule {}
