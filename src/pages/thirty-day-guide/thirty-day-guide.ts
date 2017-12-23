import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-thirty-day-guide",
  templateUrl: "thirty-day-guide.html"
})
export class ThirtyDayGuidePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThirtyDayGuidePage");
  }
}
