import { Component, ViewChild } from "@angular/core";
import {
  Content,
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-get-our-stories",
  templateUrl: "get-our-stories.html"
})
export class GetOurStoriesPage {
  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "joe-ames":
        data = {
          name: "Joe Ames",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fjoe-ames.mp4?alt=media&token=e3f58883-a794-487c-a0e2-290a9988abaa"
        };
        break;

      case "andrea-labouchere":
        data = {
          name: "Andrea Labouchere",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fandrea-labouchere-story.mp4?alt=media&token=c419290e-4476-44cc-8eea-2412604bf4ca"
        };
        break;

      case "laura-thompson":
        data = {
          name: "Laura Thompson",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Flaura-thompson-business-story.mp4?alt=media&token=d72c571c-011b-45e6-b921-ab16046e6b31"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("OurStoriesPage");
  }
}
