import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-awards",
  templateUrl: "awards.html"
})
export class AwardsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private gap: GoogleAnalyticsProvider) {}

  ionViewWillLoad() {
    this.gap.trackView("AwardsPage");
  }
}
