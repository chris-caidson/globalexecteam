import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-core-4-packs-usa",
  templateUrl: "core-4-packs-usa.html"
})
export class Core_4PacksUsaPage {
  constructor(
    public navCtrl: NavController,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider
  ) {
    if (!this.authProvider.loggedIn) {
      this.authProvider.previousPage = "Core_4PacksUsaPage";
      this.navCtrl.setRoot("LoginPage");
    }
  }

  loadCleansePage(){
    this.navCtrl.push('CleanseForLifePage');
  }

  loadIonixPage(){
    this.navCtrl.push('IonixSupremePage');
  }

  loadIsaLeanPage(){
    this.navCtrl.push('IsaleanShakePage');
  }

  loadIsaGenesisPage(){
    this.navCtrl.push('IsaGenesisPage');
  }

  load30DaySystemPage(){
    this.navCtrl.push('ThirtyDaySystemPage');
  }

  loadValuePakPage(){
    this.navCtrl.push('ValuePakPage');
  }

  loadUltimatePakPage(){
    this.navCtrl.push('UltimatePakPage');
  }

  ionViewWillLoad() {
    this.gap.trackView("Core4PacksPage");
  }
}
