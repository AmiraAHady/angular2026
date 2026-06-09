import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}
  loginUser() {
    localStorage.setItem('loggedIn', 'true');

    this.router.navigate(['/userprofile'])
  }
}
