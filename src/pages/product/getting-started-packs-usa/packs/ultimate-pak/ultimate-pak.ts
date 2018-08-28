import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-ultimate-pak',
  templateUrl: 'ultimate-pak.html',
})
export class UltimatePakPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("UltimatePakPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
