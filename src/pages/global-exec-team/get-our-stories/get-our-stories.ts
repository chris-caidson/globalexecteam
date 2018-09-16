import { Component, ViewChild } from "@angular/core";
import {
  Content,
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { GoogleAnalyticsProvider } from "./../../../providers/google-analytics/google-analytics";
import { AuthProvider } from "./../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-get-our-stories",
  templateUrl: "get-our-stories.html"
})
export class GetOurStoriesPage {
  @ViewChild(Content)
  content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public auth: AuthProvider
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "joe-ames":
        data = {
          name: "Joe Ames",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fjoe-ames.mp4?alt=media&token=e3f58883-a794-487c-a0e2-290a9988abaa"
        };
        break;

        case "nancy-baxter":
        data = {
          name: "Nancy Baxter",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fnancy-baxter-product.mp4?alt=media&token=76adcc79-2098-4948-89ac-eb0b26e4ff62"
        };
        break;

      case "erin-brauer":
        data = {
          name: "Erin Brauer",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Ferin-brauer-biz.mp4?alt=media&token=33afdcc1-48a9-45c3-a9ed-47e74c92411c"
        };
        break;

        case "helen-costa-giles":
        data = {
          name: "Helen Costa-Giles",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fhelen-costa-giles-product.mp4?alt=media&token=88bda308-801e-4685-b109-c1592048ae83"
        };
        break;

      case "adrienne-donovan":
        data = {
          name: "Adrienne Cross-Donovan",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fadrienne-cross-donovan-biz.mp4?alt=media&token=c2fc5d56-0f95-4e20-b0d8-41294dec4956"
        };
        break;

        case "melissa-henault":
        data = {
          name: "Melissa Henault",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fmelissa-henault-biz.mov?alt=media&token=c071766d-2a98-461f-956c-4a39eafa4561"
        };
        break;

      case "andrea-labouchere":
        data = {
          name: "Andrea Labouchere",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fandrea-labouchere-story.mp4?alt=media&token=c419290e-4476-44cc-8eea-2412604bf4ca"
        };
        break;

        case "patty-macnaught":
        data = {
          name: "Patty MacNaught",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fpatty-mcnaught-product.mp4?alt=media&token=6449f619-85a4-43ed-a6f7-00c594e95315"
        };
        break;

      case "laura-thompson":
        data = {
          name: "Laura Thompson",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Flaura-thompson-business-story.mp4?alt=media&token=d72c571c-011b-45e6-b921-ab16046e6b31"
        };
        break;

        case "jen-towkaniuk":
        data = {
          name: "Jen Towkaniuk",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fjen-towkaniuk-product.mp4?alt=media&token=49d8d53c-65e8-4d2a-b9db-1f0c44de7718"
        };
        break;

        case "jen-louie-towkaniuk":
        data = {
          name: "Jen & Louie Towkaniuk",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fjen-louie-towkaniuk-biz.mp4?alt=media&token=f6790156-43c6-4505-bbc3-91c4f95aca3c"
        };
        break;

        case "joanne-wright":
        data = {
          name: "Joanne Wright",
          url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftestimonials%2Fjoanne-product.mp4?alt=media&token=93af4e8e-650f-404b-8ec9-b31901e63a29"
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
