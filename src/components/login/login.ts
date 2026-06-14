import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  login(form: NgForm) {
    console.log();
    
    console.log(form.value);
  }
  // loginUser() {
  //   localStorage.setItem('loggedIn', 'true');

  //   this.router.navigate(['/userprofile'])
  // }
}
