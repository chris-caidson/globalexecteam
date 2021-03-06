import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from '../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-how-it-works",
  templateUrl: "how-it-works.html"
})
export class HowItWorksPage {
  public activeVideo: string = "shake-day";

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "shake-day":
        data = {
          name: "How to do a Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FHow%20to%20Do%20a%20Shake%20Day.mp4?alt=media&token=91c8c511-4bb2-42db-8460-41bb46a76d59"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to do a Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FHow%20to%20Do%20a%20Cleanse%20Day.mp4?alt=media&token=d7b2ac9d-17ed-48c6-98d0-860b65bbd8fa"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("HowItWorksPage");
  }

  toggleVideo(videoName: string) {
    this.activeVideo = videoName;
  }
}
