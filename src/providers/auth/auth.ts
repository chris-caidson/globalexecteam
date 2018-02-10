import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "getFitLoggedIn";

  incorrectPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
  count: number = 0;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyDg-Dg__QTQl4543MmBvB4bcFrEVExCMz8",
      authDomain: "getfreeglobal.firebaseapp.com",
      databaseURL: "https://getfreeglobal.firebaseio.com",
      projectId: "getfreeglobal",
      storageBucket: "getfreeglobal.appspot.com",
      messagingSenderId: "617157319620"
    });
  }

  public login(password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword("default_user@getfree.com", password)
      .then(() => {
        this.loggedIn = true;
        this.incorrectPassword = false;
        localStorage.setItem(this.localStorageKey, "true");
      })
      .catch(() => {
        this.loggedIn = false;
        this.incorrectPassword = true;
      });
  }
}
