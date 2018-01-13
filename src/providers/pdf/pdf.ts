import { Injectable } from "@angular/core";
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer";
import { Platform } from "ionic-angular";
import { AlertController } from "ionic-angular";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser";

@Injectable()
export class PdfProvider {
  options: InAppBrowserOptions = {
    location: "yes",
    hidden: "no",
    clearcache: "yes",
    clearsessioncache: "yes",
    zoom: "yes",
    hardwareback: "yes",
    mediaPlaybackRequiresUserAction: "no",
    shouldPauseOnSuspend: "no",
    closebuttoncaption: "Close",
    disallowoverscroll: "no",
    toolbar: "yes",
    enableViewportScale: "yes",
    allowInlineMediaPlayback: "no",
    presentationstyle: "pagesheet",
    fullscreen: "yes"
  };

  constructor(
    public docViewer: DocumentViewer,
    public platform: Platform,
    public alertCtrl: AlertController,
    private browser: InAppBrowser
  ) {}

  openPdf(title, path) {
    if (this.platform.is("cordova")) {
      this.platform.ready().then(function() {
        let alert = this.alertCtrl.create({
          title: "Open PDF",
          subTitle: "Not sure if this will work in Ionic View...",
          buttons: ["Ok"]
        });
        alert.present();

        var options: DocumentViewerOptions = { title: title };
        this.docViewer.viewDocument(path, "application/pdf", options);
      });
    } else {
      window.open(path, "_blank");
    }
  }

  openWithSystemBrowser(title: string, url: string) {
    let target = "_system";
    this.browser.create(url, target, this.options);
  }

  openWithInAppBrowser(title: string, url: string) {
    let target = "_blank";
    this.browser.create(url, target, this.options);
  }

  openWithCordovaBrowser(title: string, url: string) {
    let target = "_self";
    this.browser.create(url, target, this.options);
  }
}
