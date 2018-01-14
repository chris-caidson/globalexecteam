import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-getting-it-right",
  templateUrl: "getting-it-right.html"
})
export class GettingItRightPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider
  ) {}

  ionViewWillLoad() {
    this.gap.trackView("GettingItRightPage");
  }
}
