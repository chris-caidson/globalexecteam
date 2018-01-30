import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-solution",
  templateUrl: "solution.html"
})
export class SolutionPage {
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "toxic":
        data = {
          name: "Are You Toxic?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FAre-You-Toxic_-Isagenix-Promo-Length-YouTube-360p.mp4?alt=media&token=786d30b2-ebb6-41b6-82f3-fc5a68645c94"
        };
        break;

      case "cleansing":
        data = {
          name: "Nutritional Cleansing",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FMary-Evans-on-the-power-of-the-Isagenix-System---YouTube-(480p).mp4?alt=media&token=8cb0b61a-7d39-4871-a5f2-c50e2f007b2f"
        };
        break;
 
      case "isa-works":
        data = {
          name: "Why Isagenix Works",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FMichael.mp4?alt=media&token=cb23a367-b6b9-48e5-8a9a-d4ee9db8c4f4"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("SolutionPage");
  }
}
