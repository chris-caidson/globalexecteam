import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { GoogleAnalyticsProvider } from './../../../providers/google-analytics/google-analytics';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-success-stories",
  templateUrl: "success-stories.html"
})
export class SuccessStoriesPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private gap: GoogleAnalyticsProvider,
    public authProvider: AuthProvider
  ) {
    if (!this.authProvider.loggedIn) {
      this.authProvider.previousPage = "SuccessStoriesPage";
      this.navCtrl.setRoot("LoginPage");
    }
  }

  openVideoModal() {
    var data = {
      name: "IsaBody Challenge",
      url: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fisabody-mission.mp4?alt=media&token=911426dc-9c6f-4a51-b2ab-c29cba6200a6"
    };

    console.log(data);
    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  openPersonModal(person: string) {
    var data: any;

    switch (person) {
      case "natalie-h":
        data = {
          personName: "Natalie H.",
          location: "Scottsdale, Arizona",
          age: 31,
          height: "5'8\"",
          formerWeight: "184 pounds *",
          weightLost: "46 pounds *",
          quote:
            "“I feel the best I have ever felt. The fact that it happened while I’m able to earn an income that will allow " +
            " my husband and I to expand our family is something I can never repay. My life is forever changed.”",
          imageUrl: "assets/imgs/transformations/natalie-h-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fnatalie-h.mp4?alt=media&token=efc4f863-0a36-4678-b6e6-af1c47e9bf86"
        };
        break;

      case "billy-a":
        data = {
          personName: "Billy A.",
          location: "Phoenix, Arizona",
          age: 55,
          height: "5'0\"",
          formerWeight: "195 pounds *",
          weightLost: "50 pounds *",
          quote: "“You don't want to just be alive. You want to be living,” shares Billy. “Let's live our lives to the " +
          "fullest into our 70's, 80's, and 90's.”",
          imageUrl: "assets/imgs/transformations/bill-a-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fbilly-a.mp4?alt=media&token=68f58099-2d9e-4a48-b72d-bcfff59a8ab4"
        };
        break;

      case "angela-f":
        data = {
          personName: "Angela F.",
          location: "Summerville, South Carolina",
          age: 53,
          height: "5'4\"",
          formerWeight: "185 pounds *",
          weightLost: "45 pounds *",
          quote: "“I’m embracing the growth that comes with challenging myself physically, mentally, emotionally, and " +
            "financially,” says Angela, who credits her supportive husband, Ron, for easing her journey. This is not just " +
            "for show or to win prizes or look physically different. Isagenix truly is a vehicle for transforming lives.”",
          imageUrl: "assets/imgs/transformations/angela-f-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fangela-f.mp4?alt=media&token=bd952561-e069-4538-b6d8-c0cf4cf34f5d"
        };
        break;

      case "ryan-e":
        data = {
          personName: "Ryan E.",
          location: "Calgary, Alberta",
          age: 36,
          height: "5'8\"",
          formerWeight: "158 pounds",
          weightLost: "3 pounds (and gained 5 pounds of muscle)",
          quote: "“I talk about the IsaBody challenge with all of my patients,” tells Ryan. “Anybody that’s willing to listen. " +
            "I find when people get on it, they have nothing but great things to say. And I love to hear that because I don’t " +
            "want to just help them physically with treatments, I want to see their lifestyle change.”",
          imageUrl: "assets/imgs/transformations/ryan-e-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fryan-e.mp4?alt=media&token=da41ea74-96f1-45cf-93f2-c1fc82459828"
        };
        break;

      case "john-m":
        data = {
          personName: "John M.",
          location: "Worcester, Massachusetts",
          age: 60,
          height: "5'9\"",
          formerWeight: "198 pounds *",
          weightLost: "29 pounds *",
          quote: "“I really want to let other Baby Boomers know that Isagenix is a great opportunity,” says John. “if you’re " +
            "looking to get in shape and stay young, as far as i’m concerned, this is the ultimate system that will take you " +
            "there.”",
          imageUrl: "assets/imgs/transformations/john-m-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fjohn-m.mp4?alt=media&token=3ea3a8a6-2a2c-46dc-88ff-4795f41ae3c7"
        };
        break;

      case "amy-o":
        data = {
          personName: "Amy O.",
          location: "Eyota, Minnesota",
          age: 31,
          height: "5'2\"",
          formerWeight: "166 pounds",
          weightLost: "41 pounds *",
          quote: "“I woke up… and knew my life was going to change that day… I had made a schedule, highlighted an agenda, and " +
            "immediately signed up for the IsaBody challenge to hold me accountable.”",
          imageUrl: "assets/imgs/transformations/amy-o-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Famy-o.mp4?alt=media&token=ec727091-cd9d-42ca-b5aa-de3610e6db18"
        };
        break;

      case "abilio-v":
        data = {
          personName: "Abilio V.",
          location: "Aurora, Colorado",
          age: 63,
          height: "5'10\"",
          formerWeight: "220 pounds",
          weightLost: "32 pounds *",
          quote: "“Although I reached my physical goals, I rediscovered passion in my life, my mind, my body, and my soul,” " +
            "explains Abilio. “I am no longer a 64-year-old dreaming of escape: there is no mountain too high to climb and I " +
            "realize that my highest life purpose is to help others do the same with Isagenix.”",
          imageUrl: "assets/imgs/transformations/abilio-v-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fabilio-v.mp4?alt=media&token=e38b250d-42a8-4bc4-bf1b-4ddd7baa5513"
        };
        break;

      case "kathy-p":
        data = {
          personName: "Kathy P.",
          location: "Kapaa, Hawaii",
          age: 52,
          height: "5'2\"",
          formerWeight: "153 pounds",
          weightLost: "39 pounds total *",
          quote: "“I see firsthand, every day, how things are for the elderly folks who took care of themselves. They are " +
            "leading active, vital lives, and I want that kind of healthy aging for me,” says Kathy.",
          imageUrl: "assets/imgs/transformations/kathy-p-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftransformations%2Fkathy-p.mp4?alt=media&token=48839ea0-4eae-4483-8409-2499deae0303"
        };
        break;
    }

    const myModal = this.modalCtrl.create("IsaBodyModalPage", data);
    myModal.present();
  }

  ionViewWillLoad() {
    this.gap.trackView("SuccessStoriesPage");
  }
}
