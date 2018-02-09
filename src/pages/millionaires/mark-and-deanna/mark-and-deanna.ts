import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-mark-and-deanna',
  templateUrl: 'mark-and-deanna.html',
})
export class MarkAndDeannaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("MarkAndDeannaPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
