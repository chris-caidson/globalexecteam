import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-eat-it-love-it-share-it",
  templateUrl: "eat-it-love-it-share-it.html"
})
export class EatItLoveItShareItPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EatItLoveItShareItPage");
  }
}
