import { AuthProvider } from "./../providers/auth/auth";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage: any = "GlobalMovementPage";

  pages: Array<{
    title: string;
    component: string;
    separatorLevel: number;
    icon: string;
  }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public ga: GoogleAnalytics,
    public auth: AuthProvider
  ) {
    this.initializeApp();

    this.pages = [
      // GetFree Content
      {
        title: "Global Movement",
        component: "GlobalMovementPage",
        separatorLevel: 4,
        icon: "globe"
      },
      { title: "", component: null, separatorLevel: 2, icon: null },

      // GetFree - Movement
      {
        title: "Why Cleanse?",
        component: "WhyCleansePage",
        separatorLevel: 4,
        icon: "question-circle"
      },
      {
        title: "Problem",
        component: "ProblemPage",
        separatorLevel: 4,
        icon: "exclamation-circle"
      },
      {
        title: "Solution",
        component: "SolutionPage",
        separatorLevel: 4,
        icon: "check-circle"
      },
      { title: "", component: null, separatorLevel: 2, icon: null },

      // GetFree - Products
      {
        title: "How It Works",
        component: "HowItWorksPage",
        separatorLevel: 4,
        icon: "book"
      },
      {
        title: "Getting Started Packs (USA)",
        component: "GettingStartedPacksUsaPage",
        separatorLevel: 4,
        icon: "archive"
      },
      {
        title: "Success Stories",
        component: "SuccessStoriesPage",
        separatorLevel: 4,
        icon: "comments"
      },
      {
        title: "Science",
        component: "SciencePage",
        separatorLevel: 4,
        icon: "flask"
      },
      { title: "", component: null, separatorLevel: 2, icon: null },

      // GetFree - Opportunity
      {
        title: "Freedom Plan",
        component: "FreedomPlanPage",
        separatorLevel: 4,
        icon: "calendar-check-o"
      },
      {
        title: "Getting It Right",
        component: "GettingItRightPage",
        separatorLevel: 4,
        icon: "thumbs-up"
      },
      {
        title: "Meet Our Co-Founder",
        component: "MeetOurCofounderPage",
        separatorLevel: 4,
        icon: "female"
      },
      { title: "", component: null, separatorLevel: 2, icon: null },

      // GetFree - Money
      {
        title: "Health to Wealth",
        component: "HealthToWealthPage",
        separatorLevel: 4,
        icon: "medkit"
      },
      {
        title: "You Share, They Share, Repeat",
        component: "YouShareTheyShareRepeatPage",
        separatorLevel: 4,
        icon: "share"
      },
      {
        title: "Compensation Plan",
        component: "CompensationPlanPage",
        separatorLevel: 4,
        icon: "usd"
      },
      { title: "", component: null, separatorLevel: 2, icon: null },

      // GetFree - Success
      {
        title: "Global Exec Team",
        component: null,
        separatorLevel: 4,
        icon: null
      },
      {
        title: "Our Mission",
        component: "GetOurMissionPage",
        separatorLevel: 4,
        icon: "gavel"
      },
      {
        title: "Our Stories",
        component: "GetOurStoriesPage",
        separatorLevel: 4,
        icon: "commenting"
      },
      {
        title: "Our Team",
        component: "GetOurTeamPage",
        separatorLevel: 4,
        icon: "address-card"
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      return this.ga
        .startTrackerWithId("UA-112477677-1")
        .then(() => {
          return this.ga.enableUncaughtExceptionReporting(true);
        })
        .then(_success => {})
        .catch(_error => {
          console.log("Google Analytics Uncaught Exception:", _error);
        });
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}
