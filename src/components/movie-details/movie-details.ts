import { IMovie } from './../../common/interfaces/IMovie';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies-service';
// import { IMovie } from '../../common/interfaces/IMovie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  movieId!: string;
  // movie = signal<IMovie>({} as IMovie);
  movie!: IMovie;
  baseImageURL: string = 'https://image.tmdb.org/t/p/w500';
  loading = signal(false);
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    // route ==>angular service
    this.movieId = this.route.snapshot.paramMap.get('id')!;

    // moviesService ==>by Me
    // this.moviesService.getMovieById(this.movieId).subscribe({
    //   next: (res) => this.movie.set(res),
    // });
    this.loading.set(true)
    this.moviesService.getMovieById(this.movieId).subscribe({
      next: (res) => {
        this.movie = res
        this.loading.set(false)
      },
    });
  }
}
