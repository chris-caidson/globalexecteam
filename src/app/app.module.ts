import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PdfProvider } from '../providers/pdf/pdf';
import { GoogleAnalyticsProvider } from '../providers/google-analytics/google-analytics';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    PdfProvider,
    GoogleAnalytics,
    GoogleAnalyticsProvider,
    AuthProvider,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}
