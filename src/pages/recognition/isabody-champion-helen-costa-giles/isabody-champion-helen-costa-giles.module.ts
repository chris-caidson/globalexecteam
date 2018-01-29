import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsabodyChampionHelenCostaGilesPage } from './isabody-champion-helen-costa-giles';

@NgModule({
  declarations: [
    IsabodyChampionHelenCostaGilesPage,
  ],
  imports: [ComponentsModule,
    IonicPageModule.forChild(IsabodyChampionHelenCostaGilesPage),
  ],
})
export class IsabodyChampionHelenCostaGilesPageModule {}
