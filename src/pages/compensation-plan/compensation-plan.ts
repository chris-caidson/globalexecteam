import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-compensation-plan",
  templateUrl: "compensation-plan.html"
})
export class CompensationPlanPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "Isagenix Compensation Plan",
      url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-2018.appspot.com/o/videos%2FIsagenix%20Compensation%20Plan.mp4?alt=media&token=3a387653-5c78-4593-ad4a-2aecf0d10b44"
    });

    myModal.present();
  }
}
