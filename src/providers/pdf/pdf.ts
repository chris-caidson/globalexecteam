import { Injectable } from "@angular/core";
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";
import { Platform } from "ionic-angular";
import { AlertController } from "ionic-angular";

@Injectable()
export class PdfProvider {
  constructor(
    public docViewer: DocumentViewer,
    public platform: Platform,
    public alertCtrl: AlertController
  ) {}

  openPdf(title, path) {
    if (this.platform.is("cordova")) {
      this.platform.ready().then(function() {
        let alert = this.alertCtrl.create({
          title: 'Open PDF',
          subTitle: 'Not sure if this will work in Ionic View...',
          buttons: ['Ok']
        });
        alert.present();

        var options: DocumentViewerOptions = { title: title };
        this.docViewer.viewDocument(path, "application/pdf", options);
      });
    } else {
      window.open(path, "_blank");
    }
  }
}
