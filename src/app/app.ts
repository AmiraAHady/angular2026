import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Navbar } from '../components/navbar/navbar';
import { ProductList } from '../components/product-list/product-list';
import { Footer } from '../components/footer/footer';
import { MovieList } from '../components/movie-list/movie-list';
import { UserProfile } from '../components/user-profile/user-profile';
import { Parent } from '../components/parent/parent';

// metadata
@Component({
  // component directive /selector
  selector: 'app-root',
  // standalone
  // External dependancey
  imports: [Navbar, Footer, ProductList, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
