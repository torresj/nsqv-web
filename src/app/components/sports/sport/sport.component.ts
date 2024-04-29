import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { BehaviorSubject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import TVEvent from '../../../models/TVEvent';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css',
})
export class SportComponent {
  event$ = new BehaviorSubject<TVEvent | undefined>(undefined);
  isLoading$ = new BehaviorSubject(true);

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.eventService.getEvent$(params['id']).subscribe({
        next: (tvEvent) => {
          this.event$.next(tvEvent);
          this.isLoading$.next(false);
        },
        error: (error) =>
          this.router.navigate(['/not-found'], { replaceUrl: true }),
      })
    );
  }
}
