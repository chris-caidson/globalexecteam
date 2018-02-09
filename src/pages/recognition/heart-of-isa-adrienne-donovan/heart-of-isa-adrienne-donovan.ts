import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-heart-of-isa-adrienne-donovan',
  templateUrl: 'heart-of-isa-adrienne-donovan.html',
})
export class HeartOfIsaAdrienneDonovanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }
 
  ionViewWillLoad() {
    this.gap.trackView("HeartOfIsagenixAdrienneDonovanPage");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
