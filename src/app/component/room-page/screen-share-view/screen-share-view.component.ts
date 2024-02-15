// screen-share-view.component.ts
import { Component, Input } from '@angular/core';
import { Track } from 'livekit-client';

@Component({
  selector: 'app-screen-share-view',
  templateUrl: './screen-share-view.component.html',
  styleUrls: ['./screen-share-view.component.css'],
})
export class ScreenShareViewComponent {
  @Input() track!: Track;
  @Input() width!: string;
  @Input() height!: string;
}
