import { Component } from '@angular/core';
import { moviesData } from '../../data/movies';
import { IMovie } from '../../common/interfaces/IMovie';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-movie-list',
  imports: [NgClass, NgStyle,UpperCasePipe,DatePipe],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  allMovies:IMovie[]=moviesData
  baseImageURL:string='https://image.tmdb.org/t/p/w500'
}
