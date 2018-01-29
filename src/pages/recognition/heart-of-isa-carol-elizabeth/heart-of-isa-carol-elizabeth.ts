import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-heart-of-isa-carol-elizabeth',
  templateUrl: 'heart-of-isa-carol-elizabeth.html',
})
export class HeartOfIsaCarolElizabethPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private gap: GoogleAnalyticsProvider) {
  }

  ionViewWillLoad() {
    this.gap.trackView("HeartOfIsagenixCarolElizabethPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
