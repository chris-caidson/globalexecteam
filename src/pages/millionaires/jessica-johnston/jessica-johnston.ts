import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-jessica-johnston',
  templateUrl: 'jessica-johnston.html',
})
export class JessicaJohnstonPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider) {
      if (!this.authProvider.loggedIn) {
        this.authProvider.previousPage = "GetOurTeamPage";
        this.navCtrl.setRoot("LoginPage");
      }
  }

  ionViewWillLoad() {
    this.gap.trackView("JessicaJohnstonPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
