import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-premium-pak',
  templateUrl: 'premium-pak.html',
})
export class PremiumPakPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pdfProvider: PdfProvider) {
  }
}
