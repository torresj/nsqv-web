import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConstants } from '../constants/api.constants';
import Channel from '../models/Channel';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private http: HttpClient) {}

  getChannel$(id: string) {
    return this.http.get<Channel>(apiConstants.apiBaseUrl + '/channels/' + id);
  }

  getChannels$() {
    return this.http.get<Channel[]>(apiConstants.apiBaseUrl + '/channels');
  }
}
