import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/series/serie/serie.component';
import { SportsComponent } from './components/sports/sports.component';
import { SportComponent } from './components/sports/sport/sport.component';
import { ChannelComponent } from './components/channel/channel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SerieComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/:id', component: SportComponent },
  { path: 'channels/:id', component: ChannelComponent },
  { path: '**', component: NotFoundComponent },
];
