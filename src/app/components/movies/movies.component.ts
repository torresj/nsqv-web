import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { BehaviorSubject } from 'rxjs';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import TVEvent from '../../models/TVEvent';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [
    CommonModule,
    MovieCardComponent,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class MoviesComponent implements OnInit {
  liveMovies$ = new BehaviorSubject<TVEvent[]>([]);
  LiveMoviesFiltered$ = new BehaviorSubject<TVEvent[]>([]);
  isLoading$ = new BehaviorSubject(true);

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getLiveMovies$().subscribe((movies) => {
      this.liveMovies$.next(movies);
      this.LiveMoviesFiltered$.next(movies);
      this.isLoading$.next(false);
    });
  }

  onInputChange(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.LiveMoviesFiltered$.next(
      this.liveMovies$.value.filter(
        (movie) =>
          movie.name.toLowerCase().includes(filter.toLowerCase()) ||
          movie.channel.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
