import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-success-stories",
  templateUrl: "success-stories.html"
})
export class SuccessStoriesPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  openVideoModal() {
    var data = {
      name: "IsaBody Challenge",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Fisabody-mission.mp4?alt=media&token=1dfb9c6f-0b61-407e-8cff-9b6e13271112"
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
            " my husband and I to expand our family is something I can never repary. My life is forever changed.”",
          imageUrl: "../../assets/imgs/transformations/natalie-h-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fnatalie-h.mp4?alt=media&token=e3be4bf4-79d8-419e-a61e-572e2fc68717"
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
          imageUrl: "../../assets/imgs/transformations/bill-a-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fbilly-a.mp4?alt=media&token=0b9a0792-5d07-4c53-9b88-dddaa9f71348"
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
          imageUrl: "../../assets/imgs/transformations/angela-f-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fangela-f.mp4?alt=media&token=60fe3e84-0d8d-4a24-bab4-1f8f8f3d22b5"
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
          imageUrl: "../../assets/imgs/transformations/ryan-e-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fryan-e.mp4?alt=media&token=4eeeb1eb-9aad-43a9-8f27-596cb9a55cc8"
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
          quote: "“I really want to let other baby boomers know that Isagenix is a great opportunity,” says John. “if you’re " +
            "looking to get in shape and stay young, as far as i’m concerned, this is the ultimate system that will take you " +
            "there.”",
          imageUrl: "../../assets/imgs/transformations/john-m-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fjohn-m.mp4?alt=media&token=08697eca-b56e-494d-a26b-11c24c148130"
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
          imageUrl: "../../assets/imgs/transformations/amy-o-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Famy-o.mp4?alt=media&token=ee8b1bfb-b5dc-454f-963d-cc619550123c"
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
          imageUrl: "../../assets/imgs/transformations/abilio-v-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fabilio-v.mp4?alt=media&token=fbd5d43a-00d0-4ea3-b8de-9d3fd0da8978"
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
          imageUrl: "../../assets/imgs/transformations/kathy-p-before-and-after.jpg",
          videoUrl: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2Ftransformations%2Fkathy-p.mp4?alt=media&token=b874946b-7649-4896-8450-73f0a062820d"
        };
        break;
    }

    const myModal = this.modalCtrl.create("IsaBodyModalPage", data);
    myModal.present();
  }
}
