import { Routes } from '@angular/router';
import { ProductList } from '../components/product-list/product-list';
import { Home } from '../components/home/home';
import { MovieList } from '../components/movie-list/movie-list';
import { About } from '../components/about/about';
import { UserProfile } from '../components/user-profile/user-profile';
import { PageNotFound } from '../components/page-not-found/page-not-found';
import { MovieDetails } from '../components/movie-details/movie-details';
import { Login } from '../components/login/login';
// http://localhost:4200/products/a123

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: ProductList },
  { path: 'movies', component: MovieList },
  // id ==>route params
  { path: 'movies/:id', component: MovieDetails },
  { path: 'about', component: About },
  { path: 'userprofile', component: UserProfile },
  { path: 'login', component: Login },
  // wildCard Route
  { path: '**', component: PageNotFound },
];
