import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';

@IonicPage()
@Component({
  selector: "page-meet-our-cofounder",
  templateUrl: "meet-our-cofounder.html"
})
export class MeetOurCofounderPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private gap: GoogleAnalyticsProvider) {}

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Meet Our Cofounder - Kathy Coover",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FSusan%20Miller%20with%20Kathy%20Coover%20-%20How%20Isagenix%20Got%20it%20Right!.mp4?alt=media&token=18cafa7c-4c84-48a9-9440-22498363739e"
    });

    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("MeetOurCofounderPage");
  }
}
