import { AuthProvider } from './../../providers/auth/auth';
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
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "wellness-revolution":
        data = {
          name: "The Wellness Revolution",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fwhy-isagenix.mp4?alt=media&token=30419a29-2709-44c2-88ba-b93f1fc7f98c"
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
    this.gap.trackView("HomePage");
  }
}
