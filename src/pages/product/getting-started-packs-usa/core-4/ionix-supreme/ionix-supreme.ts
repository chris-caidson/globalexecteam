import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-ionix-supreme",
  templateUrl: "ionix-supreme.html"
})
export class IonixSupremePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "The Science Behind Adaptogens",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fthe-science-behind-adaptogens.mp4?alt=media&token=855599c3-c597-45b7-bcfa-50e9275051fa"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("IonixSupremePage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
