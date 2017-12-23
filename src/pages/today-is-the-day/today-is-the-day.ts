import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-today-is-the-day",
  templateUrl: "today-is-the-day.html"
})
export class TodayIsTheDayPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TodayIsTheDayPage");
  }
}
