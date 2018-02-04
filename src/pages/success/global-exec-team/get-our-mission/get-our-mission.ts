import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-get-our-mission",
  templateUrl: "get-our-mission.html"
})
export class GetOurMissionPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "get-party":
        data = {
          name: "GET Party",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fget-party.mp4?alt=media&token=cc92d033-600e-4029-8ef4-24db25967677"
        };
        break;

      case "our-mission":
        data = {
          name: "What's Your 'Why'?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fi-am-good-enough.mp4?alt=media&token=d2bdb828-55ba-4a2f-a608-543ff7a8430d"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("OurMissionPage");
  }
}
