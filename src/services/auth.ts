import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
  isAuthanticated() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
