import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import Event from '../../../models/TVEvent';

@Component({
  selector: 'sport-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule,
  ],
  templateUrl: './sport-card.component.html',
  styleUrl: './sport-card.component.css',
})
export class SportCardComponent {
  @Input() event!: Event;
}
