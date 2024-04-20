import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '../constants/api.constants';
import TVEvent from '../models/TVEvent';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvent$(id: string) {
    return this.http.get<TVEvent>(apiConstants.apiBaseUrl + '/events/' + id);
  }
}
