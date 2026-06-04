import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  profileData!: any;

  constructor() {
    // DI
    console.log('User Profile component instantiated!');
  }

  ngOnInit(): void {
    // api call
    this.profileData = { name: 'ali', age: 21 };
    console.log('inside ngOnInit!');
  }
}
