import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeartOfIsaCarolElizabethPage } from './heart-of-isa-carol-elizabeth';

@NgModule({
  declarations: [
    HeartOfIsaCarolElizabethPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(HeartOfIsaCarolElizabethPage),
  ],
})
export class HeartOfIsaCarolElizabethPageModule {}
