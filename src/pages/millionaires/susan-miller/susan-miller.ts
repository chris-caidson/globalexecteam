import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from "./../../../providers/google-analytics/google-analytics";

@IonicPage()
@Component({
  selector: "page-susan-miller",
  templateUrl: "susan-miller.html"
})
export class SusanMillerPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider
  ) {}

  ionViewWillLoad() {
    this.gap.trackView("SusanMillerPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
