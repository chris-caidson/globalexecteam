import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from './../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-why-cleanse",
  templateUrl: "why-cleanse.html"
})
export class WhyCleansePage {
  year: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) { }

  ionViewWillLoad() {
    this.year = (new Date()).getFullYear();
    this.gap.trackView("WhyCleansePage");
  }

  loadProblemPage() {
    this.navCtrl.push('ProblemPage');
  }

  loadSolutionPage() {
    this.navCtrl.push('SolutionPage');
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Transform Your Life",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransform-your-life.mp4?alt=media&token=c140a7a6-1b68-4689-a461-fd4add1aeb30"
    });

    myModal.present();
  }
}
