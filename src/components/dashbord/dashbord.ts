import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {}
