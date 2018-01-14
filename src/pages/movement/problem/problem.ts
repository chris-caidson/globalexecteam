import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-problem",
  templateUrl: "problem.html"
})
export class ProblemPage {
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "fed-up":
        data = {
          name: "Fed Up",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FFED-UP-Official-Trailer-YouTube-480p.mp4?alt=media&token=9f1c7ac9-0ad6-4445-9246-e7221bf4d1f3"
        };
        break;

      case "food-matters":
        data = {
          name: "Food Matters",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FFood-Matters-Official-Trailer-YouTube-360p.mp4?alt=media&token=f9979ac5-c7e2-45f3-b195-373f6dbc2e11"
        };
        break;

      case "unhealthy-truth":
        data = {
          name: "The Unhealthy Truth",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FRobyn-O39Brien-_-TEDxAustin-2011-YouTube-360p.mp4?alt=media&token=13dbeda6-9c44-4cfd-a827-d588c4222738"
        };
        break;

      case "diets-failing":
        data = {
          name: "Why Diets Fail",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FWhy-Diets-Are-Failing-Us---YouTube-(480p).mp4?alt=media&token=4a612f00-e307-48b1-a85d-5955e604e8c9"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("ProblemPage");
  }
}
