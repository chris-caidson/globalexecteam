import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-eat-it-love-it-share-it",
  templateUrl: "eat-it-love-it-share-it.html"
})
export class EatItLoveItShareItPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "You Share, They Share, Repeat",
      url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FYou%20Share%2C%20They%20Share%2C%20Repeat.mp4?alt=media&token=0d41dbda-00e9-43be-aa13-7b860b5f4e90"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("EatItLoveItShareItPage");
  }
}
