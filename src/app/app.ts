import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Navbar } from '../components/navbar/navbar';
import { ProductList } from '../components/product-list/product-list';
import { Footer } from '../components/footer/footer';
// metadata
@Component({
  // component directive /selector
  selector: 'app-root',
  // standalone
  // External dependancey
  imports: [ Navbar, Footer, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
