import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { BehaviorSubject } from 'rxjs';
import { MovieComponent } from './movie/movie.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import TVEvent from '../../models/TVEvent';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [CommonModule, MovieComponent, MatProgressSpinnerModule],
})
export class MoviesComponent implements OnInit {
  liveMovies$ = new BehaviorSubject<TVEvent[]>([]);
  isLoading$ = new BehaviorSubject(true);

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getLiveMovies$().subscribe((movies) => {
      this.liveMovies$.next(movies);
      this.isLoading$.next(false);
    });
  }
}
