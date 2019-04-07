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
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fbiz-21st-century-joe-ames.mp4?alt=media&token=7736142c-b107-4280-b755-bbbbe9e25275"
        };
        break;

      case "next-entrepreneur":
        data = {
          name: "The Next Entrepreneur",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FTheNextEntrepreneur.mp4?alt=media&token=69abdd57-4d88-49bb-9ca1-00b9a4c0273c"
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
