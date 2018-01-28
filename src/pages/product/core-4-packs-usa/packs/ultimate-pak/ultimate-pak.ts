import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-ultimate-pak',
  templateUrl: 'ultimate-pak.html',
})
export class UltimatePakPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pdfProvider: PdfProvider, private gap: GoogleAnalyticsProvider) {
  }

  ionViewWillLoad() {
    this.gap.trackView("UltimatePakPage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
