import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-health-to-wealth",
  templateUrl: "health-to-wealth.html"
})
export class HealthToWealthPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "johnston-family":
        data = {
          name: "The Johnston Family",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fjohnston-family.mp4?alt=media&token=6e0e96d0-80b1-4693-9b7e-c479bc64ca0e"
        };
        break;

      case "kelley-and-tyler":
        data = {
          name: "Kelley and Tyler",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fkelley-and-tyler.mp4?alt=media&token=5bbfc445-5c8e-49f0-9a23-fcd6b7a7a28a"
        };
        break;

      case "laura-s":
        data = {
          name: "Laura S.",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Flaura-s.mp4?alt=media&token=801f8fbb-ad99-4aba-ad22-6211276c91e8"
        };
        break;

      case "lisa-r":
        data = {
          name: "Lisa R.",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Flisa-r.mp4?alt=media&token=4933a94c-4750-4e62-8205-c2c52895b88a"
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
