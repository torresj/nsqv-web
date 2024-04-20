import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SerieService } from '../../services/serie.service';
import TVEvent from '../../models/TVEvent';
import { SerieCardComponent } from './serie-card/serie-card.component';

@Component({
  selector: 'app-series',
  standalone: true,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SerieCardComponent,
  ],
})
export class SeriesComponent implements OnInit {
  isLoading$ = new BehaviorSubject(true);
  liveSeries$ = new BehaviorSubject<TVEvent[]>([]);
  liveSeriesFiltered$ = new BehaviorSubject<TVEvent[]>([]);

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getLiveSeries$().subscribe((series) => {
      this.liveSeries$.next(series);
      this.liveSeriesFiltered$.next(series);
      this.isLoading$.next(false);
    });
  }

  onInputChange(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.liveSeriesFiltered$.next(
      this.liveSeries$.value.filter(
        (serie) =>
          serie.name.toLowerCase().includes(filter.toLowerCase()) ||
          serie.channel.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
