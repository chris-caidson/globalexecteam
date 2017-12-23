import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-get-our-stories",
  templateUrl: "get-our-stories.html"
})
export class GetOurStoriesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad GetOurStoriesPage");
  }
}
