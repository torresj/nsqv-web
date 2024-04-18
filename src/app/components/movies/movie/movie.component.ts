import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import Event from '../../../models/TVEvent';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatProgressBarModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input() movie!: Event;

  getRate() {
    return this.movie.rate ? this.movie.rate.toFixed(1) : 0;
  }
}
