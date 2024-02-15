import { Component, Input, OnInit } from '@angular/core';
import { Participant, Track, VideoTrack } from 'livekit-client';
import { ParticipantViewComponent } from '../participant-view/participant-view.component';
import { ScreenShareViewComponent } from '../screen-share-view/screen-share-view.component';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-speaker-stage',
  templateUrl: './speaker-stage.component.html',
  styleUrls: ['./speaker-stage.component.css'],
})
export class SpeakerStageComponent implements OnInit {
  @Input() roomState!: {
    isConnecting: boolean;
    error: Error | null;
    participants: Participant[];
    room: any; // Replace 'any' with the correct type
    roomState: any; 
  };

  @Input() participantRenderer: typeof ParticipantViewComponent | undefined;
  @Input() controlRenderer: typeof ControlsComponent | undefined;
  @Input() onLeave!: () => void;
  @Input() sortParticipants: ((participants: Participant[]) => Participant[]) | undefined;
  @Input() room: any;
  screenTrack!: VideoTrack;
  participants: Participant[] = [];

  showOverlay: boolean = false;
  sortedParticipants: Participant[] = [];
  constructor() {
    // Initialize the room state as needed
    this.roomState = {
      isConnecting: false,
      error: null,
      participants: [], // Initialize with an empty array or provide initial participants
      room: null, // Initialize 'room' as needed
      roomState: null, // Initialize 'roomState' as needed
    };
  }


  ngOnInit(): void {
    this.sortedParticipants = this.sortParticipants
      ? this.sortParticipants(this.roomState.participants)
      : this.defaultSortParticipants(this.roomState.participants);
  }

  private defaultSortParticipants(participants: Participant[]): Participant[] {
    // Implement your default sorting logic here
    return participants;
  }
  
}
