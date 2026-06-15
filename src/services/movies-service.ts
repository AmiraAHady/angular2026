import { Injectable } from '@angular/core';
import { IMovie } from '../common/interfaces/IMovie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../common/interfaces/MovieApiResponse';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  private apiKey = '0ab69d58b9382bc390a939b7dbbe713b';

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`,
    );
  }

  getMovieById(id: string): Observable<IMovie> {
    return this.http.get<IMovie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
  }
}
