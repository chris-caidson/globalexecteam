import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-why-cleanse",
  templateUrl: "why-cleanse.html"
})
export class WhyCleansePage {
  year: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider) {
      if (!this.authProvider.loggedIn) {
        this.authProvider.previousPage = "WhyCleansePage";
        this.navCtrl.setRoot("LoginPage");
      }
    }

  ionViewWillLoad() {
    this.year = (new Date()).getFullYear();
    this.gap.trackView("WhyCleansePage");
  }

  loadProblemPage() {
    this.navCtrl.push('ProblemPage');
  }

  loadSolutionPage() {
    this.navCtrl.push('SolutionPage');
  }
}
