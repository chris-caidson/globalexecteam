import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-cleanse-for-life',
  templateUrl: 'cleanse-for-life.html',
})
export class CleanseForLifePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public pdfProvider: PdfProvider, private gap: GoogleAnalyticsProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "cleanse-day":
        data = {
          name: "How to do an Isagenix Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=598043fc-4744-41e5-b9ed-ea4f267cbc7c"
        };
        break;

      case "product-info":
        data = {
          name: "Cleanse for Life Product Information",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcleanse-for-life-product-info.mp4?alt=media&token=f3b21be1-e0fc-4be0-9064-e03aa5dfcf09"
        };
        break;

        case "on-the-go":
        data = {
          name: "Cleanse for Life Info on the Go",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcleanse-for-life-info-on-the-go.mp4?alt=media&token=17661426-2880-423f-b076-e9eaefd8fbbf"
        };
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("CleanseForLifePage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
