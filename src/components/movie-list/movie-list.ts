import { Component, inject, OnInit } from '@angular/core';
import { moviesData } from '../../data/movies';
import { IMovie } from '../../common/interfaces/IMovie';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  allMovies!: IMovie[];
  baseImageURL: string = 'https://image.tmdb.org/t/p/w500';
  moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.allMovies = this.moviesService.getMovies();
  }
}
