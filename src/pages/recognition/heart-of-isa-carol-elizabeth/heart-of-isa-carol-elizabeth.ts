import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-heart-of-isa-carol-elizabeth',
  templateUrl: 'heart-of-isa-carol-elizabeth.html',
})
export class HeartOfIsaCarolElizabethPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("HeartOfIsagenixCarolElizabethPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
