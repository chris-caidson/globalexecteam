import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-health-to-wealth",
  templateUrl: "health-to-wealth.html"
})
export class HealthToWealthPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "johnston-family":
        data = {
          name: "The Johnston Family",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fjohnston-family.mp4?alt=media&token=0d798c12-7328-40ce-b99e-935b148ed05d"
        };
        break;

      case "kelley-and-tyler":
        data = {
          name: "Kelley and Tyler",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fkelley-and-tyler.mp4?alt=media&token=6c5f53ad-1b6c-4824-94da-c0caf1b09871"
        };
        break;

      case "laura-s":
        data = {
          name: "Laura S.",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Flaura-s.mp4?alt=media&token=8dc6816d-3c3c-4344-8ba9-b679f0f39ce6"
        };
        break;

      case "lisa-r":
        data = {
          name: "Lisa R.",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Flisa-r.mp4?alt=media&token=bfc0e9da-a957-474b-b0f0-f4c2be46a7fd"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("HealthToWealthPage");
  }
}
