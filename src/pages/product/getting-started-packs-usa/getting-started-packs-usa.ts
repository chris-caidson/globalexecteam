import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GoogleAnalyticsProvider } from "../../../providers/google-analytics/google-analytics";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-getting-started-packs-usa",
  templateUrl: "getting-started-packs-usa.html"
})
export class GettingStartedPacksUsaPage {
  public details: string;

  constructor(
    public navCtrl: NavController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) {}

  ionViewWillLoad() {
    this.gap.trackView("Core4PacksPage");
  }

  toggleDetails(product: string) {
    if (this.details === product) {
      this.details = "";
    } else {
      this.details = product;
    }
  }
}
