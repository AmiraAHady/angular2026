import { Component, inject, OnInit, signal } from '@angular/core';
import { IMovie } from '../../common/interfaces/IMovie';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  allMovies!: IMovie[];
  baseImageURL: string = 'https://image.tmdb.org/t/p/w500';
  moviesService = inject(MoviesService);
  loading = signal(false);

  ngOnInit() {
    // next,error,compelete
    this.loading.set(true);
    this.moviesService.getMovies().subscribe({
      next: (response) => {
        this.allMovies = response.results;
        this.loading.set(false);
      },

      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request Complete!');
      },
    });
  }
}
