import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { ChannelService } from '../../services/channel.service';
import { BehaviorSubject } from 'rxjs';
import Channel from '../../models/Channel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatRippleModule,
    RouterModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  channels$ = new BehaviorSubject<Channel[]>([]);

  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    this.channelService
      .getChannels$()
      .subscribe((channels) => this.channels$.next(channels));
  }
}
