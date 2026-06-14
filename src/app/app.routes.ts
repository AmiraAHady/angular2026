import { Routes } from '@angular/router';
import { ProductList } from '../components/product-list/product-list';
import { Home } from '../components/home/home';
import { MovieList } from '../components/movie-list/movie-list';
import { About } from '../components/about/about';
import { UserProfile } from '../components/user-profile/user-profile';
import { PageNotFound } from '../components/page-not-found/page-not-found';
import { MovieDetails } from '../components/movie-details/movie-details';
import { Login } from '../components/login/login';
import { Dashbord } from '../components/dashbord/dashbord';
import { Profile } from '../components/dashbord/profile/profile';
import { Settings } from '../components/dashbord/settings/settings';
import { authGuard } from '../core/auth-guard-guard';
import { StudentRegister } from '../components/student-register/student-register';
// http://localhost:4200/dashbord/profile

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: ProductList },
  { path: 'movies', loadChildren: () => import('./movies.routes').then((m) => m.MoviesRoutes) },
  { path: 'about', component: About },
  { path: 'userprofile', component: UserProfile },
  { path: 'studentregister', component: StudentRegister },
  { path: 'login', component: Login },
  {
    path: 'dashbord',
    component: Dashbord,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
    ],
  },
  // wildCard Route
  { path: '**', component: PageNotFound },
];
