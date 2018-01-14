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
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=7e02e057-d60e-47ca-b6cb-763c61ba9e87"
        };
        break;

      case "product-info":
        data = {
          name: "Cleanse for Life Product Information",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fcleanse-for-life-product-info.mp4?alt=media&token=ce788be9-4f0f-4f6f-8a11-8a4ab030fc25"
        };
        break;

        case "on-the-go":
        data = {
          name: "Cleanse for Life Info on the Go",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fcleanse-for-life-info-on-the-go.mp4?alt=media&token=0153d785-70f4-4737-96fb-8c33e81384a6"
        };
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("CleanseForLifePage");
  }
}
