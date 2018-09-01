import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController } from "ionic-angular";
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
    private modalCtrl: ModalController,
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

  openVideoModal(video: string) {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Melissa Henault Explains the Value Pak",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fmelissa-henault-value-pak.mp4?alt=media&token=d44e9016-8f30-4be2-b53d-37809892a815"
    });
    myModal.present();
  }
}
