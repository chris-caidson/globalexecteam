import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

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
    public ga: GoogleAnalytics
  ) {
    this.initializeApp();

    this.pages = [
      // GetFree Content
      { title: "Home", component: "HomePage", separatorLevel: 4, icon: "home" },

      // GetFree - Movement
      { title: "Movement", component: null, separatorLevel: 2, icon: null },
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

      // GetFree - Opportunity
      { title: "Opportunity", component: null, separatorLevel: 2, icon: null },
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

      // GetFree - Money
      { title: "Money", component: null, separatorLevel: 2, icon: null },
      {
        title: "Eat It, Love It, Share It",
        component: "EatItLoveItShareItPage",
        separatorLevel: 4,
        icon: "cutlery"
      },
      {
        title: "Compensation Plan",
        component: "CompensationPlanPage",
        separatorLevel: 4,
        icon: "usd"
      },

      // GetFree - Product
      { title: "Product", component: null, separatorLevel: 2, icon: null },
      {
        title: "30-day Guide",
        component: "ThirtyDayGuidePage",
        separatorLevel: 4,
        icon: "book"
      },
      {
        title: "Core 4 / Packs (USA)",
        component: "Core_4PacksUsaPage",
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

      // GetFree - Company
      { title: "Company", component: null, separatorLevel: 2, icon: null },
      {
        title: "Corporate Leadership",
        component: "CorporateLeadershipPage",
        separatorLevel: 4,
        icon: "users"
      },
      {
        title: "Sci. Advisory Board",
        component: "ScientificAdvisoryBoardPage",
        separatorLevel: 4,
        icon: "handshake-o"
      },
      {
        title: "Press Releases",
        component: "PressReleasesPage",
        separatorLevel: 4,
        icon: "file-text"
      },
      {
        title: "Awards",
        component: "AwardsPage",
        separatorLevel: 4,
        icon: "trophy"
      },

      // GetFree - Success
      { title: "Success", component: null, separatorLevel: 2, icon: null },
      {
        title: "Health to Wealth",
        component: "HealthToWealthPage",
        separatorLevel: 4,
        icon: "medkit"
      },

      // GetFree - Global Exec Team
      {
        title: "Global Exec Team",
        component: null,
        separatorLevel: 3,
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
