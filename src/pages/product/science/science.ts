import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PdfProvider } from '../../../providers/pdf/pdf';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-science",
  templateUrl: "science.html"
})
export class SciencePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider) {
      if (!this.authProvider.loggedIn) {
        this.authProvider.previousPage = "SciencePage";
        this.navCtrl.setRoot("LoginPage");
      }
    }

    ionViewWillLoad() {
      this.gap.trackView("SciencePage");
    }
}
