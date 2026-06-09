import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies-service';
import { IMovie } from '../../common/interfaces/IMovie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movieId!: number;
  movie!:IMovie |undefined
  baseImageURL: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    // route ==>angular service
    this.movieId = parseInt(this.route.snapshot.paramMap.get('id')!);

    // moviesService ==>by Me
    this.movie=this.moviesService.getMovieById(this.movieId)
  }
}
