import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";

@IonicPage()
@Component({
  selector: 'page-ionix-supreme',
  templateUrl: 'ionix-supreme.html',
})
export class IonixSupremePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public docViewer: DocumentViewer) {
  }

  openPdf(pdfFile: string, pdfTitle: string) {
    var options: DocumentViewerOptions = { title: pdfTitle }
    this.docViewer.viewDocument(pdfFile, "application/pdf", options);
  }
}
