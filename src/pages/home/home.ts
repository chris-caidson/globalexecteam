import { Component } from "@angular/core";
import { NavController, ModalController, IonicPage } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "wellness-revolution":
        data = {
          name: "The Wellness Revolution",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fwhy-isagenix.mp4?alt=media&token=c1fa9ed1-c70b-4f24-95f7-5877ea80a9dd"
        };
        break;

      case "start-your-life":
        data = {
          name: "Start Your Life (18 - 35)",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fstart-your-life.mp4?alt=media&token=c04537c4-36f3-4e88-a6ee-fc8ed87d715e"
        };
        break;

      case "enterprising-women":
        data = {
          name: "Enterprising Women",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fenterprising-women.mp4?alt=media&token=466ee01e-494c-4987-8139-4b799a12b9a2"
        };
        break;

      case "retire-wealthy":
        data = {
          name: "Retire Wealthy",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fretire-wealthy.mp4?alt=media&token=375142d8-7bb4-4302-89ae-072bd2590eda"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("HomePage");
  }
}
