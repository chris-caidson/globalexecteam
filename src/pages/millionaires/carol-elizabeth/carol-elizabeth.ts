import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-carol-elizabeth',
  templateUrl: 'carol-elizabeth.html',
})
export class CarolElizabethPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gap: GoogleAnalyticsProvider, public auth: AuthProvider) {
  }

  ionViewWillLoad() {
    this.gap.trackView("CarlElizabethPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
