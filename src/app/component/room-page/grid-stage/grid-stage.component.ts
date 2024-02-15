import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'livekit-client';
interface LiveKitRoom {
  activeSpeakers: any;
  participants: any;
  localParticipant: any;
  // Define the properties and methods of LiveKitRoom if necessary
}

@Component({
  selector: 'app-grid-stage',
  templateUrl: './grid-stage.component.html',
  styleUrls: ['./grid-stage.component.css']
})
export class GridStageComponent {
  @Input() roomState: any;
  @Input() participantRenderer: any;
  @Input() controlRenderer: any;
  @Output() leave = new EventEmitter<void>();

  visibleParticipants: Participant[] = [];
  showOverlay = false;
  gridClass = 'grid1x1';

  constructor(private router: Router) {}

  ngOnInit() {
    const { isConnecting, error, participants, room } = this.roomState;

    if (error) {
      console.log(`error ${error.message}`);
      return;
    }

    if (isConnecting) {
      console.log('connecting');
      return;
    }

    if (!room) {
      console.log('room closed');
      return;
    }

    if (participants.length === 0) {
      console.log('no one is in the room');
      return;
    }

    this.computeVisibleParticipants(participants, room);
  }

  computeVisibleParticipants(participants: Participant[], room: LiveKitRoom) {
    // determine grid size
    let numVisible = 1;
    if (participants.length === 1) {
      this.gridClass = 'grid1x1';
    } else if (participants.length === 2) {
      this.gridClass = 'grid2x1';
      numVisible = 2;
    } else if (participants.length <= 4) {
      this.gridClass = 'grid2x2';
      numVisible = Math.min(participants.length, 4);
    } else if (participants.length <= 9) {
      this.gridClass = 'grid3x3';
      numVisible = Math.min(participants.length, 9);
    } else if (participants.length <= 16) {
      this.gridClass = 'grid4x4';
      numVisible = Math.min(participants.length, 16);
    } else {
      this.gridClass = 'grid5x5';
      numVisible = Math.min(participants.length, 25);
    }

    // remove any participants that are no longer connected
    const newParticipants: Participant[] = [];
    this.visibleParticipants.forEach((p) => {
      if (room?.participants.has(p.sid) || room?.localParticipant.sid === p.sid) {
        newParticipants.push(p);
      }
    });

    // ensure active speakers are all visible
    room?.activeSpeakers?.forEach((speaker: Participant) => {
      if (
        newParticipants.includes(speaker) ||
        (speaker !== room?.localParticipant && !room?.participants.has(speaker.sid))
      ) {
        return;
      }
      // find a non-active speaker and switch
      const idx = newParticipants.findIndex((p) => !p.isSpeaking);
      if (idx >= 0) {
        newParticipants[idx] = speaker;
      } else {
        newParticipants.push(speaker);
      }
    });

    // add other non speakers
    for (const p of participants) {
      if (newParticipants.length >= numVisible) {
        break;
      }
      if (newParticipants.includes(p) || p.isSpeaking) {
        continue;
      }
      newParticipants.push(p);
    }

    if (newParticipants.length > numVisible) {
      newParticipants.splice(numVisible, newParticipants.length - numVisible);
    }
    this.visibleParticipants = newParticipants;
  }

  onLeave() {
    this.leave.emit();
    this.router.navigate(['/']);
  }
}