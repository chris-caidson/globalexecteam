import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-adam-ciarla',
  templateUrl: 'adam-ciarla.html',
})
export class AdamCiarlaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private gap: GoogleAnalyticsProvider) {
  }

  ionViewWillLoad() {
    this.gap.trackView("AdamCiarlaPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
