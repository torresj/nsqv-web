import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { BehaviorSubject } from 'rxjs';
import { MovieComponent } from './movie/movie.component';
import TVEvent from '../../models/TVEvent';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [CommonModule, MovieComponent],
})
export class MoviesComponent implements OnInit {
  liveMovies$ = new BehaviorSubject<TVEvent[]>([]);

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getLiveMovies$()
      .subscribe((movies) => this.liveMovies$.next(movies));
  }
}
