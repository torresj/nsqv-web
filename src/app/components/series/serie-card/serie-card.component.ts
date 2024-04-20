import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import Event from '../../../models/TVEvent';

@Component({
  selector: 'serie-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule,
  ],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css',
})
export class SerieCardComponent {
  @Input() serie!: Event;

  getRate() {
    return this.serie.rate ? this.serie.rate.toFixed(1) : 0;
  }
}
