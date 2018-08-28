import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-getting-started-packs-usa",
  templateUrl: "getting-started-packs-usa.html"
})
export class GettingStartedPacksUsaPage {
  constructor(
    public navCtrl: NavController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

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
