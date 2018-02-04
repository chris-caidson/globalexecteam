import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";
import { GoogleAnalyticsProvider } from './../../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: 'page-isalean-shake',
  templateUrl: 'isalean-shake.html',
})
export class IsaleanShakePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public pdfProvider: PdfProvider, private gap: GoogleAnalyticsProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "shake-day":
        data = {
          name: "How to do an Isagenix Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=3794d722-24ce-408a-9bb7-d1479a1fc975"
        };
        break;

      case "presentation":
        data = {
          name: "IsaLean Shake Presentation",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fisalean-shake-presentation.mp4?alt=media&token=dbfce094-1133-4225-996b-67d1f7b5aaed"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("IsaLeanShakePage");
  }

  goBack() {
    this.navCtrl.pop();
  }
}
