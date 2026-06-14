import { Routes } from '@angular/router';
import { MovieList } from '../components/movie-list/movie-list';
import { MovieDetails } from '../components/movie-details/movie-details';

// http://localhost:4200/dashbord/profile

export const MoviesRoutes: Routes = [
  { path: '', component: MovieList },
  { path: ':id', component: MovieDetails },
];
