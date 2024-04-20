import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SeriesComponent } from './components/series/series.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'series', component: SeriesComponent },
  { path: '**', component: NotFoundComponent },
];
