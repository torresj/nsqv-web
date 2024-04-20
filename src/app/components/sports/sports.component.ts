import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import TVEvent from '../../models/TVEvent';
import { SportService } from '../../services/sports.service';
import { SportCardComponent } from './sport-card/sport-card.component';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SportCardComponent,
  ],
})
export class SportsComponent {
  isLoading$ = new BehaviorSubject(true);
  liveSports$ = new BehaviorSubject<TVEvent[]>([]);
  liveSportsFiltered$ = new BehaviorSubject<TVEvent[]>([]);

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportService.getLiveSports$().subscribe((sports) => {
      this.liveSports$.next(sports);
      this.liveSportsFiltered$.next(sports);
      this.isLoading$.next(false);
    });
  }

  onInputChange(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.liveSportsFiltered$.next(
      this.liveSports$.value.filter(
        (sport) =>
          sport.name.toLowerCase().includes(filter.toLowerCase()) ||
          sport.channel.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }
}
