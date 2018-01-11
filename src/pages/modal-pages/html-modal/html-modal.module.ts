import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlModalPage } from './html-modal';

@NgModule({
  declarations: [
    HtmlModalPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlModalPage),
  ],
})
export class HtmlModalPageModule {}
