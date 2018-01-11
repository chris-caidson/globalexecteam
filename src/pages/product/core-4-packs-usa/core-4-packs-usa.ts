import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-core-4-packs-usa",
  templateUrl: "core-4-packs-usa.html"
})
export class Core_4PacksUsaPage {
  constructor(
    public navCtrl: NavController
  ) {}

  loadCleansePage(){
    this.navCtrl.push('CleanseForLifePage');
  }

  loadIonixPage(){
    this.navCtrl.push('IonixSupremePage');
  }

  loadIsaLeanPage(){
    this.navCtrl.push('IsaleanShakePage');
  }

  loadProductBPage(){
    this.navCtrl.push('ProductBPage');
  }

  loadStarterPakPage(){
    this.navCtrl.push('StarterPakPage');
  }

  loadPremiumPakPage(){
    this.navCtrl.push('PremiumPakPage');
  }

  loadValuePakPage(){
    this.navCtrl.push('ValuePakPage');
  }
}
