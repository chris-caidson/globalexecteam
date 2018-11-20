import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

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
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider,
    public modalCtrl: ModalController
  ) { }

  ionViewWillLoad() {
    this.gap.trackView("GettingItRightPage");
  }

  openVideoModal(video: string) {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "The Coming of Age of an Industry",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcoming-of-age.mp4?alt=media&token=151ee0ee-951a-4e6f-a2a0-28e74bd61766"
    });

    myModal.present();
  }
}
