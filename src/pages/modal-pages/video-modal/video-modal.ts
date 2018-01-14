import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-video-modal",
  templateUrl: "video-modal.html"
})
export class VideoModalPage {
  videoName: string;
  videoUrl: string;

  constructor(private navParams: NavParams, private viewCtrl: ViewController, private gap: GoogleAnalyticsProvider) {}

  ionViewWillLoad() {
    this.videoName = this.navParams.get("name");
    this.videoUrl = this.navParams.get("url");

    this.gap.trackView("VideoModalPage");
    this.gap.trackEvent("Opened Modal", `Loaded ${this.videoName}`, "Video");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
