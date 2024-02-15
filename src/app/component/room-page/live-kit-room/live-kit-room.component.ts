import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Room, RoomOptions, RoomConnectOptions, ConnectionState, LocalVideoTrack, createLocalVideoTrack, Participant } from 'livekit-client';
// import { ControlsProps } from './controls-props'; // Import your Angular component props interfaces
// import { ParticipantProps } from './participant-props'; // Import your Angular component props interfaces
// import { StageProps } from './stage-props'; // Import your Angular component props interfaces
// import { StageView } from './stage-view'; // Import your Angular component

@Component({
  selector: 'app-live-kit-room',
  templateUrl: './live-kit-room.component.html',
  styleUrls: ['./live-kit-room.component.css']
})
export class LiveKitRoomComponent implements OnInit, OnDestroy {
    @Input() url!: string;
    @Input() token!: string;
    @Input() roomOptions?: RoomOptions;
    @Input() connectOptions?: RoomConnectOptions;
    @Input() stageRenderer!: (props: any) => void;
    @Input() participantRenderer!: (props: any) => void;
    @Input() controlRenderer!: (props: any) => void;
    @Input() onConnected?: (room: Room) => void;
    @Input() onLeave?: (room: Room) => void;
    @Output() connected: EventEmitter<Room> = new EventEmitter<Room>();


  roomState!: Room;
  videoTrack?: LocalVideoTrack;
  audioDevice: MediaDeviceInfo | undefined;
  videoDevice: MediaDeviceInfo | undefined;
  requestPermissions: boolean = true;
  videoEnabled = false;
  // participantData!: Participant; // Define the participantData property
  participant!: Participant;
  @Input() displayName: string | undefined; // Input property for display name
  



// Inside LiveKitRoomComponent class
private connectPromise: Promise<Room> | undefined;

ngOnInit() {
  this.roomState = new Room();

  try {
    this.roomState.connect(this.url, this.token, this.connectOptions);
  } catch (error) {
    console.error('Error connecting to the room:', error);
  }

  // Listen for the connection state change
  this.roomState.on('stateChanged', (state: ConnectionState) => {
    if (state === ConnectionState.Connected) {
      // Emit the connected event when the room is connected
      this.connected.emit(this.roomState);
    }
  });
}


isRoomConnected(room: Room | void): room is Room {
  return !!room && typeof room === 'object' && 'state' in room && room.state === ConnectionState.Connected;
}
constructor() {
  // Debugging: Log initialization
  console.log('LiveKitRoomComponent initialized');
}

// isRoomConnected(room: Room | void): room is Room {
//   return !!room && typeof room === 'object' && 'state' in room && room.state === ConnectionState.Connected;
// }


  ngOnDestroy() {
    if (this.roomState?.state !== ConnectionState.Disconnected) {
      this.roomState?.disconnect();
    }
  }

// Inside LiveKitRoomComponent class

// Inside LiveKitRoomComponent class

selectedStageRenderer(): any {
  if (this.stageRenderer) {
    return this.stageRenderer({
      roomState: this.roomState,
      participantRenderer: this.participantRenderer,
      controlRenderer: this.controlRenderer,
      onLeave: this.onLeave
    });
  } else {
    return null;
  }
}

toggleVideo(): void {
  if (this.videoTrack) {
    // If video track exists, attempt to stop it
    try {
      this.videoTrack.stop();
      this.videoEnabled = false;
      this.videoTrack = undefined;
    } catch (error) {
      console.error('Error stopping video track:', error);
    }
  } else {
    // If video track doesn't exist, create it
    createLocalVideoTrack({ deviceId: this.videoDevice?.deviceId })
      .then((track: LocalVideoTrack) => {
        // Assign the created video track to this.videoTrack
        this.videoTrack = track;
        this.videoEnabled = true;
      })
      .catch((error) => {
        console.error('Error creating video track:', error);
        // You can add specific error handling here
      });
  }
}




onParticipantMouseEnter(): void {
  // Define behavior when mouse enters a participant
}

onParticipantMouseLeave(): void {
  // Define behavior when mouse leaves a participant
}

onParticipantClick(): void {
  // Define behavior when a participant is clicked
}

}
