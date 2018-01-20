import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';

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
    private gap: GoogleAnalyticsProvider
  ) {}

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "The Science Behind Adaptogens",
      url:
        "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fthe-science-behind-adaptogens.mp4?alt=media&token=18c532a9-6268-4088-80c8-11510d33a55c"
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
