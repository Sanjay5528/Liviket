import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Room, LocalParticipant } from 'livekit-client';

interface CustomLocalParticipant extends LocalParticipant {
  cameraPublication?: any; // Replace 'any' with the correct type
  microphonePublication?: any;
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  @Input() room!: Room;
  @Input() enableScreenShare?: boolean;
  @Input() enableAudio?: boolean;
  @Input() enableVideo?: boolean;
  @Output() leaveRoom: EventEmitter<Room> = new EventEmitter<Room>();

  micPub: any;
  audioButtonDisabled: boolean = false;
  videoButtonDisabled: boolean = false;
  screenButtonDisabled: boolean = false;
  camPub: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localParticipant: CustomLocalParticipant = this.room.localParticipant;
    this.camPub = localParticipant.cameraPublication;
    this.micPub = localParticipant.microphonePublication;

    if (this.enableScreenShare === undefined) {
      this.enableScreenShare = true;
    }
    if (this.enableVideo === undefined) {
      this.enableVideo = true;
    }
    if (this.enableAudio === undefined) {
      this.enableAudio = true;
    }
  }

  toggleMicrophone() {
    this.audioButtonDisabled = true;
    const isEnabled = !(this.micPub?.isMuted ?? true);
    this.room.localParticipant.setMicrophoneEnabled(!isEnabled).finally(() => {
      this.audioButtonDisabled = false;
    });
  }

  toggleCamera() {
    this.videoButtonDisabled = true;
    const isEnabled = !(this.camPub?.isMuted ?? true);
    this.room.localParticipant.setCameraEnabled(!isEnabled).finally(() => {
      this.videoButtonDisabled = false;
    });
  }

  toggleScreenShare() {
    this.screenButtonDisabled = true;
    const isEnabled = this.room.localParticipant.isScreenShareEnabled;
    this.room.localParticipant.setScreenShareEnabled(!isEnabled).finally(() => {
      this.screenButtonDisabled = false;
    });
  }

  leaveRoomClicked() {
    this.room.disconnect();
    this.leaveRoom.emit(this.room);
    this.router.navigate(['/prejoin']);
  }
}
