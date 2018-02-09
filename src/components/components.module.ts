import { NgModule } from "@angular/core";
import { IonicPageModule } from 'ionic-angular';
import { GetFooterComponent } from "./get-footer/get-footer";
import { LoginComponent } from './login/login';

@NgModule({
  declarations: [GetFooterComponent,
    LoginComponent],
  imports: [IonicPageModule],
  exports: [GetFooterComponent,
    LoginComponent]
})
export class ComponentsModule {}
