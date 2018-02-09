import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from "./../../../providers/google-analytics/google-analytics";
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-susan-miller",
  templateUrl: "susan-miller.html"
})
export class SusanMillerPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("SusanMillerPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
