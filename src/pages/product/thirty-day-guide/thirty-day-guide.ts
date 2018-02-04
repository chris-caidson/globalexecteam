import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-thirty-day-guide",
  templateUrl: "thirty-day-guide.html"
})
export class ThirtyDayGuidePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public pdfProvider: PdfProvider, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "shake-day":
        data = {
          name: "How to do a Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=3794d722-24ce-408a-9bb7-d1479a1fc975"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to do a Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=598043fc-4744-41e5-b9ed-ea4f267cbc7c"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("ThirtyDayGuidePage");
  }
}
