import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-today-is-the-day",
  templateUrl: "today-is-the-day.html"
})
export class TodayIsTheDayPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "today":
        data = {
          name: "Today is the Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FToday%20is%20the%20Day.mp4?alt=media&token=8ad99737-c6ae-4245-a191-ff7a681f4fb7"
        };
        break;

      case "freedom":
        data = {
          name: "Freedom Plan",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ffinal-freedom-video.mp4?alt=media&token=82af18c3-30cd-440d-9a01-af90bf3e7b77"
        };
        break;

      case "vision":
        data = {
          name: "The TIME is NOW!",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FGMT20171102-010719_Herb-Patty_2560x1440.mp4?alt=media&token=f825ce87-c083-4801-8f77-2419aecb58f7"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("TodayIsTheDayPage");
  }
}
