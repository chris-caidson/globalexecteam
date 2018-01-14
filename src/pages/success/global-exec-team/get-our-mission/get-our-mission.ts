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
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fget-party.mp4?alt=media&token=09fb9ffb-d437-4d9a-ba42-d88cbb215f5d"
        };
        break;

      case "our-mission":
        data = {
          name: "What's Your 'Why'?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fi-am-good-enough.mp4?alt=media&token=cca97046-24dd-40aa-9be3-bd8101441ee1"
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
