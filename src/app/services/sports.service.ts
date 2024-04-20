import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '../constants/api.constants';
import TVEvent from '../models/TVEvent';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  constructor(private http: HttpClient) {}

  getLiveSports$() {
    return this.http.get<TVEvent[]>(apiConstants.apiBaseUrl + '/sports/live');
  }
}
