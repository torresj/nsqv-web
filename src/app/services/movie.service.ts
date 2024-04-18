import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '../constants/api.constants';
import TVEvent from '../models/TVEvent';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getLiveMovies$() {
    return this.http.get<TVEvent[]>(apiConstants.apiBaseUrl + '/movies/live');
  }
}
