import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-eat-it-love-it-share-it",
  templateUrl: "eat-it-love-it-share-it.html"
})
export class EatItLoveItShareItPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "You Share, They Share, Repeat",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FYou%20Share%2C%20They%20Share%2C%20Repeat.mp4?alt=media&token=8324d58b-a37e-4e04-9ab7-e04774330518"
    });

    myModal.present();
  }
}
