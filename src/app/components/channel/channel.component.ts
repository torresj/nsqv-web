import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../services/event.service';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import TVEvent from '../../models/TVEvent';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../services/channel.service';
import { MovieCardComponent } from '../movies/movie-card/movie-card.component';
import { SportCardComponent } from '../sports/sport-card/sport-card.component';
import { SerieCardComponent } from '../series/serie-card/serie-card.component';
import { TVEventType } from '../../models/TVEventType';
import Channel from '../../models/Channel';

@Component({
  selector: 'app-channel',
  standalone: true,
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MovieCardComponent,
    SportCardComponent,
    SerieCardComponent,
  ],
})
export class ChannelComponent implements OnInit {
  TVEventType = TVEventType;
  channel$ = new BehaviorSubject<Channel | undefined>(undefined);
  events$ = new BehaviorSubject<TVEvent[]>([]);
  eventsFiltered$ = new BehaviorSubject<TVEvent[]>([]);
  isLoading$ = new BehaviorSubject(true);

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private channelService: ChannelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.channelService.getChannel$(params['id']).subscribe({
        next: (channel) => {
          this.channel$.next(channel);
          this.eventService
            .getTodayEventsByChannelId$(channel.id.toString())
            .subscribe((events) => {
              this.events$.next(events);
              this.eventsFiltered$.next(events);
              this.isLoading$.next(false);
            });
        },
        error: (error) =>
          this.router.navigate(['/not-found'], { replaceUrl: true }),
      })
    );
  }

  onInputChange(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.eventsFiltered$.next(
      this.events$.value.filter((event) =>
        event.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
