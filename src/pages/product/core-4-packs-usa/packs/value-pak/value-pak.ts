import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from "../../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-value-pak',
  templateUrl: 'value-pak.html',
})
export class ValuePakPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pdfProvider: PdfProvider) {
  }

}
