// mobile-stage.component.ts
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Participant, Track, TrackPublication, VideoTrack } from 'livekit-client';
import { ControlsComponent } from '../controls/controls.component';
import { ParticipantViewComponent } from '../participant-view/participant-view.component';
import { defaultSortParticipants } from '../stageutils';


@Component({
  selector: 'app-mobile-stage',
  templateUrl: './mobile-stage.component.html',
  styleUrls: ['./mobile-stage.component.css'],
})
export class MobileStageComponent implements OnInit, OnChanges {
  @Input() roomState: any; // Replace 'any' with your actual RoomState type
  @Input() participantRenderer!: typeof ParticipantViewComponent;
  @Input() controlRenderer!: typeof ControlsComponent;
  @Input() onLeave!: () => void;
  @Input() sortParticipants!: (participants: Participant[]) => Participant[];

  showOverlay = false;
  sortedParticipants: Participant[] = [];
  mainView: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.sortParticipants = this.sortParticipants || defaultSortParticipants;
    this.updateSortedParticipants();
  }

  ngOnChanges(): void {
    this.updateSortedParticipants();
  }

  private updateSortedParticipants(): void {
    this.sortedParticipants = this.sortParticipants(this.roomState.participants);
    this.selectMainView();
  }

  private selectMainView(): void {
    if (this.roomState.error) {
      this.mainView = `error ${this.roomState.error.message}`;
    } else if (this.roomState.isConnecting) {
      this.mainView = 'connecting';
    } else if (!this.roomState.room) {
      this.mainView = 'room closed';
    } else if (this.sortedParticipants.length === 0) {
      this.mainView = 'no one is in the room';
    } else {
      this.setMainView();
    }
  }

  private setMainView(): void {
    let screenTrack: TrackPublication | undefined;

    this.sortedParticipants.forEach((p) => {
      if (screenTrack) {
        return;
      }

      const track = p.getTrack(Track.Source.ScreenShare);
      if (track?.isSubscribed) {
        screenTrack = track;
      }
    });

    if (screenTrack) {
      this.mainView = 'screenShareView';
    } else if (this.sortedParticipants.length === 0) {
      this.mainView = 'no one is in the room';
    } else {
      const [participantInFocus, ...otherParticipants] = this.sortedParticipants;
      this.mainView = 'participantView';
      this.showOverlay = false; // Initial state of showOverlay
    }
  }
}
