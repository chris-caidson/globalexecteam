import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-isabody-champion-helen-costa-giles',
  templateUrl: 'isabody-champion-helen-costa-giles.html',
})
export class IsabodyChampionHelenCostaGilesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("IsaBodyChampionHelenCostaGiles");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
