// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Room, RoomEvent, setLogLevel, VideoPresets } from 'livekit-client';

// interface DisplayOptions {
//   stageLayout: 'grid' | 'speaker';
//   showStats: boolean;
// }

// @Component({
//   selector: 'app-room',
//   templateUrl: './room.component.html',
//   styleUrls: ['./room.component.css'],
// })
// export class RoomComponent implements OnInit {
//   numParticipants: number = 0;
//   displayOptions: any = {
//     stageLayout: 'grid',
//     showStats: false,
//   };
//   url: string = 'http://16.170.100.91:7880/';
//   token: string = 'YOUR_TOKEN'; // Replace with your token
//   recorder: string | null = '';

//   constructor(private router: Router, private route: ActivatedRoute) {
//     // Retrieve recorder value from query params
//     this.route.queryParams.subscribe((params) => {
//       this.recorder = params['recorder'];
//     });
//   }

//   ngOnInit(): void {
//     if (!this.url || !this.token) {
//       // Handle missing URL or token
//       console.error('URL and token are required.');
//       return;
//     }

//     setLogLevel('debug');

//     // Initialize your roomState here if needed
//     const roomState: Room = new Room();
//     (window as any).currentRoom = roomState;

//     this.onConnected(roomState);
//   }

//   onConnected(room: Room): void {
//     room.on(RoomEvent.ParticipantConnected, () => this.updateParticipantSize(room));
//     room.on(RoomEvent.ParticipantDisconnected, () => this.onParticipantDisconnected(room));
//     this.updateParticipantSize(room);

//     // Implement the rest of your logic here
//   }

//   updateParticipantSize(room: Room): void {
//     this.numParticipants = room.participants.size + 1;
//   }

//   onParticipantDisconnected(room: Room): void {
//     this.updateParticipantSize(room);

//     /* Special rule for recorder */
//     if (this.recorder && parseInt(this.recorder, 10) === 1 && room.participants.size === 0) {
//       console.log('END_RECORDING');
//     }
//   }

//   updateOptions(options: any): void {
//     this.displayOptions = { ...this.displayOptions, ...options };
//   }
// }

// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute, Router } from '@angular/router';
// // import { Room, RoomEvent, setLogLevel, VideoPresets } from 'livekit-client';

// // interface DisplayOptions {
// //   stageLayout: 'grid' | 'speaker';
// //   showStats: boolean;
// // }

// // @Component({
// //   selector: 'app-room',
// //   templateUrl: './room.component.html',
// //   styleUrls: ['./room.component.css'],
// // })
// // export class RoomComponent implements OnInit {
// //   numParticipants: number = 0;
// //   recorder: string | null = null;

// //   displayOptions: DisplayOptions = {
// //     stageLayout: 'grid',
// //     showStats: false,
// //   };
// //   url: string = 'http://16.170.100.91:7880/';
// //   token: string =
// //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjUyOTM4ODc4MTEsImlzcyI6IktyaXlhVGVjIiwibmJmIjoxNjkzODg3ODExLCJzdWIiOiJiYXNrYXIiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuUHVibGlzaFNvdXJjZXMiOlsiY2FtZXJhIiwibWljcm9waG9uZSIsInNjcmVlbl9zaGFyZSIsInNjcmVlbl9zaGFyZV9hdWRpbyJdLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJyMSIsInJvb21Kb2luIjp0cnVlfX0.271bho80NE-Ceig4nSkrKrbPuJzf22SZ8f3R50RQ7pE';

// //   constructor(private router: Router, private route: ActivatedRoute) {}

// //   ngOnInit(): void {
// //     this.recorder = this.route.snapshot.queryParamMap.get('recorder');

// //     if (!this.url || !this.token) {
// //       console.log('url and token are required');
// //       return;
// //     }

// //     this.initializeLiveKit();
// //   }

// //   onLeave(): void {
// //     this.router.navigate(['/']);
// //   }

// //   updateParticipantSize(room: Room): void {
// //     this.numParticipants = room.participants.size + 1;
// //   }

// //   onParticipantDisconnected(room: Room): void {
// //     this.updateParticipantSize(room);

// //     /* Special rule for recorder */
// //     if (
// //       this.recorder &&
// //       parseInt(this.recorder, 10) === 1 &&
// //       room.participants.size === 0
// //     ) {
// //       console.log('END_RECORDING');
// //     }
// //   }

// //   updateOptions(options: DisplayOptions): void {
// //     this.displayOptions = {
// //       ...this.displayOptions,
// //       ...options,
// //     };
// //   }

// //   private initializeLiveKit(): void {
// //     // Connect to LiveKit and initialize event listeners
// //     const urlParams = {
// //       url: this.url,
// //       token: this.token,
// //     };

// //     // Initialize LiveKit and event listeners here
// //     // You can use the urlParams object to pass parameters to LiveKit

// //     // Example code:
// //     // setLogLevel('debug');
// //     // room.on(RoomEvent.ParticipantConnected, () => this.updateParticipantSize(room));
// //     // room.on(RoomEvent.ParticipantDisconnected, () => this.onParticipantDisconnected(room));
// //     // this.updateParticipantSize(room);
// //   }
// // }




// // import { Component, OnInit } from '@angular/core';
// // import { Room, RoomEvent, setLogLevel, VideoPresets } from 'livekit-client';
// // import { DisplayContext, DisplayOptions, LiveKitRoom } from '@livekit/react-components';
// // import { ActivatedRoute, Router } from '@angular/router';

// // @Component({
// //   selector: 'app-room-page',
// //   template: `
   
// //   `,
// //   styleUrls: ['./room-page.component.css'],
// // })
// // export class RoomComponent implements OnInit {
// //   numParticipants = 0;
// //   displayOptions: DisplayOptions = {
// //     stageLayout: 'grid',
// //     showStats: false,
// //   };
// //   url = 'http://16.170.100.91:7880/';
// //   token = 'your-token-here'; // Replace with your actual token
// //   recorder = '1'; // Replace with your recorder value

// //   faThLarge = faThLarge;
// //   faSquare = faSquare;
// //   faUserFriends = faUserFriends;

// //   constructor(private route: ActivatedRoute, private router: Router) {}

// //   ngOnInit(): void {
// //     setLogLevel('debug');
// //     const query = this.route.snapshot.queryParamMap;
// //     if (!this.url || !this.token) {
// //       console.error('url and token are required');
// //       return;
// //     }
// //     if (query.get('audioEnabled')) {
// //       const audioDeviceId = query.get('audioDeviceId');
// //       if (audioDeviceId) {
// //         // Update audio capture device settings here
// //       }
// //     }
// //     if (query.get('videoEnabled')) {
// //       const videoDeviceId = query.get('videoDeviceId');
// //       if (videoDeviceId) {
// //         // Update video capture device settings here
// //       }
// //     }
// //   }

// //   onLeave(): void {
// //     this.router.navigate(['/']);
// //   }

// //   updateParticipantSize(room: Room): void {
// //     this.numParticipants = room.participants.size + 1;
// //   }

// //   onParticipantDisconnected(room: Room): void {
// //     this.updateParticipantSize(room);

// //     if (this.recorder === '1' && room.participants.size === 0) {
// //       console.log('END_RECORDING');
// //     }
// //   }

// //   updateOptions(options: DisplayOptions): void {
// //     this.displayOptions = { ...this.displayOptions, ...options };
// //   }

// //   onConnected(room: Room, query: URLSearchParams): void {
// //     window['currentRoom'] = room;

// //     room.on(RoomEvent.ParticipantConnected, () => this.updateParticipantSize(room));
// //     room.on(RoomEvent.ParticipantDisconnected, () => this.onParticipantDisconnected(room));
// //     this.updateParticipantSize(room);
// //   }
// // }



// room-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSquare, faThLarge, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Room, RoomEvent, setLogLevel, VideoPresets } from 'livekit-client';
import { DisplayOptions } from 'src/app/services/display-options.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent {
  faSquare = faSquare;
  faThLarge = faThLarge;
  faUserFriends = faUserFriends;
  query = new URLSearchParams(window.location.search);
  room!: Room; // Assuming 'Room' is the correct type
  RoomConnectOptions: any;
  StageRenderer: any;
  ParticipantRenderer: any;
  ControlRenderer: any;
  


  numParticipants = 1;
  displayOptions = {
    stageLayout: 'grid',
    showStats: false,
  };
  url = 'http://16.170.100.91:7880/';
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjUyOTQwODE1MTYsImlzcyI6IktyaXlhVGVjIiwibmJmIjoxNjk0MDgxNTE2LCJzdWIiOiJiYXNrYXIiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuUHVibGlzaFNvdXJjZXMiOlsiY2FtZXJhIiwibWljcm9waG9uZSIsInNjcmVlbl9zaGFyZSIsInNjcmVlbl9zaGFyZV9hdWRpbyJdLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJyMSIsInJvb21Kb2luIjp0cnVlfX0.f7jHdX45O7r3K7_cpOnIzx2OEeJJmNTjLM0cCPfVf4w';
  recorder = this.query.get('recorder');

  roomOptions = {
    adaptiveStream: this.isSet(this.query, 'adaptiveStream'),
    dynacast: this.isSet(this.query, 'dynacast'),
    publishDefaults: {
      simulcast: this.isSet(this.query, 'simulcast'),
    },
    videoCaptureDefaults: {
      resolution: VideoPresets.h720.resolution,
    },
  };

  constructor(private router: Router) {}

  onLeave() {
    this.router.navigate(['/']);
  }

  updateParticipantSize(room: any) {
    this.numParticipants = room.participants.size + 1;
  }

  onParticipantDisconnected(room: any) {
    this.updateParticipantSize(room);

    /* Special rule for recorder */
    if (
      this.recorder &&
      parseInt(this.recorder, 10) === 1 &&
      room.participants.size === 0
    ) {
      console.log('END_RECORDING');
    }
  }

  updateOptions(options: any) {
    this.displayOptions = {
      ...this.displayOptions,
      ...options,
    };
  }

  async onConnected(room: Room) {
    debugger
    console.log('Room connected:', room);

    // make it easier to debug
    this.room = room;
    (window as any).currentRoom = room;

    if (this.isSet(this.query, 'audioEnabled')) {
      const audioDeviceId = this.query.get('audioDeviceId');
      if (audioDeviceId && room.options.audioCaptureDefaults) {
        room.options.audioCaptureDefaults.deviceId = audioDeviceId;
      }
      await room.localParticipant.setMicrophoneEnabled(true);
    }

    if (this.isSet(this.query, 'videoEnabled')) {
      const videoDeviceId = this.query.get('videoDeviceId');
      if (videoDeviceId && room.options.videoCaptureDefaults) {
        room.options.videoCaptureDefaults.deviceId = videoDeviceId;
      }
      await room.localParticipant.setCameraEnabled(true);
    }

    setLogLevel('debug');
    this.updateParticipantSize(room);
    room.on(RoomEvent.ParticipantConnected, () =>
      this.updateParticipantSize(room)
    );
    room.on(RoomEvent.ParticipantDisconnected, () =>
      this.onParticipantDisconnected(room)
    );
    this.updateParticipantSize(room);
  }
  

  isSet(query: any, key: string): boolean {
    return query.get(key) === '1' || query.get(key) === 'true';
  }
  // onRoomConnected(event:any){

  // }



  
}


