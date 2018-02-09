import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-value-pak',
  templateUrl: 'value-pak.html',
})
export class ValuePakPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("ValuePakPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
