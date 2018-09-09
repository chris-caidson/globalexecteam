import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams } from "ionic-angular";
import { PdfProvider } from '../../../providers/pdf/pdf';
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

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
    private modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Dr. Arciero on Isagenix Clinical Research",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fdr-arciero-q-and-a.mp4?alt=media&token=94b20e32-9570-4669-b685-4124dc91aea5"
    });
    myModal.present();
  }

    ionViewWillLoad() {
      this.gap.trackView("SciencePage");
    }
}
