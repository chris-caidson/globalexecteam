import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-freedom-plan",
  templateUrl: "freedom-plan.html"
})
export class FreedomPlanPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "today":
        data = {
          name: "Today is the Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FToday%20is%20the%20Day.mp4?alt=media&token=b8f4dd4c-14e9-45e6-88ec-302185454035"
        };
        break;

      case "freedom":
        data = {
          name: "Freedom Plan",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ffinal-freedom-video.mp4?alt=media&token=6890a090-123f-4b9d-a014-c7698ab102ec"
        };
        break;

      case "vision":
        data = {
          name: "The TIME is NOW!",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FGMT20171102-010719_Herb-Patty_2560x1440.mp4?alt=media&token=530d0b59-62fa-4fe6-a3c5-ff4c262db1e6"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("FreedomPlanPage");
  }
}
