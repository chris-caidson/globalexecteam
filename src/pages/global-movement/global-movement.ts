import { AuthProvider } from '../../providers/auth/auth';
import { Component } from "@angular/core";
import { NavController, ModalController, IonicPage } from "ionic-angular";
import { GoogleAnalyticsProvider } from '../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-global-movement",
  templateUrl: "global-movement.html"
})
export class GlobalMovementPage {
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "business-future":
        data = {
          name: "The Business of the Future",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fbiz-of-the-future.mp4?alt=media&token=9ea20e8d-0f88-436e-bb02-6bd5c6125355"
        };
        break;

      case "next-entrepreneur":
        data = {
          name: "The Next Entrepreneur",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FTheNextEntrepreneur.mp4?alt=media&token=69abdd57-4d88-49bb-9ca1-00b9a4c0273c"
        };
        break;

      case "start-your-life":
        data = {
          name: "Start Your Life (18 - 35)",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fstart-your-life.mp4?alt=media&token=d4208c34-2206-4735-8cad-18ed32050d6d"
        };
        break;

      case "enterprising-women":
        data = {
          name: "Enterprising Women",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fenterprising-women.mp4?alt=media&token=68db15cc-f3e9-4e03-bd8e-b71559704275"
        };
        break;

      case "retire-wealthy":
        data = {
          name: "Retire Wealthy",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fretire-wealthy.mp4?alt=media&token=bc685695-32cb-4020-8968-44b8767babc5"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("GlobalMovementPage");
  }
}
