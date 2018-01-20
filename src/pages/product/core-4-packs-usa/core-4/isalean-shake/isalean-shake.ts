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
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=2015e97e-bb87-4a0c-85ea-9e664ca13a7f"
        };
        break;

      case "presentation":
        data = {
          name: "IsaLean Shake Presentation",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fisalean-shake-presentation.mp4?alt=media&token=5a616879-197c-4ba6-99e1-4d33c6f94176"
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
