import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { GoogleAnalytics } from "@ionic-native/google-analytics";

@Injectable()
export class GoogleAnalyticsProvider {
  constructor(private platform: Platform, private ga: GoogleAnalytics) {}

  trackView(pageName: string) {
    this.platform.ready().then(() => {
      this.ga.trackView(pageName);
    });
  }

  trackEvent(category: string, action: string, label?: string, value?: number) {
    this.platform.ready().then(() => {
      this.ga.trackEvent(category, action, label, value);
    });
  }
}
