import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  loggedIn: boolean;
  incorrectPassword: boolean;

  public previousPage: string = "HomePage";

  public login(credentials) {
    if (credentials === "xxxxxxxx") {
      this.loggedIn = true;
      this.incorrectPassword = false;
    }
    else {
      this.loggedIn = false;
      this.incorrectPassword = true;
    }
  }
}
