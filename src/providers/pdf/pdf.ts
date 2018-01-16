import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { AppAvailability } from "@ionic-native/app-availability";

@Injectable()
export class PdfProvider {
  constructor(
    public platform: Platform,
    public alertCtrl: AlertController,
    private browser: InAppBrowser,
    private appAvailability: AppAvailability
  ) {}

  openPdf(title, path) {
    this.platform.ready().then(() => {
      if (this.platform.is("android")) {
        this.appAvailability
          .check("com.adobe.reader")
          .then(result => console.log("Has Adobe Acrobat Reader: " + result));
      };
    });

    this.browser.create(path, "_system", {
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
    });
  }
}
