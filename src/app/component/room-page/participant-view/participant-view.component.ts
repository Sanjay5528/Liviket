// import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
// import { Participant, Track, LocalTrack, RemoteTrack } from 'livekit-client';

// @Component({
//   selector: 'app-participant-view',
//   templateUrl: './participant-view.component.html',
//   styleUrls: ['./participant-view.component.css'],
// })
// export class ParticipantViewComponent implements OnInit, OnDestroy, OnChanges {
//   @Input() participant!: Participant;
//   @Input() orientation?: 'landscape' | 'portrait'; 
//   @Input() showOverlay?: boolean; // Add this line for the showOverlay input
//   @Input() showConnectionQuality?: boolean; // Add this line for the showOverlay input
//   @Input() width?: string;
//   @Input() height?: string;
//   @Input() className?: string;
//   @Input() speakerClassName?: string;
//   @Input() displayName?: string;
//   @Input() isAudioMuted?: boolean; // Add an input property for audio mute state
//   @Input() aspectWidth?: number;
//   @Input() aspectHeight?: number;
//   @Input() isSpeaking?: boolean; // Declare the isSpeaking property as an input property
//   @Input() track: Track | null | undefined;
//   @Input() cameraPublication: any; // Define the type appropriately


//   isLocal!: boolean;
//   objectFit: 'contain' | 'cover' = 'contain'; 

//   ngOnInit(): void {
//     debugger
//     console.log('Participant:', this.participant);
//     console.log('DisplayName:', this.displayName);
//     // Determine if the participant is local (you might need to adapt this logic)
//     this.isLocal = this.participant.isLocal;

//     // Set objectFit based on video orientation (you may need to adapt this logic)
//     this.objectFit = this.calculateObjectFit();

//     // Handle track changes
//     this.participant.on('trackPublished', (pub) => {
//       if (pub.kind === 'video') {
//         this.cameraPublication.track = pub.track!;
//       }
//     });
//   }
//   getFirstTrack(participant: Participant): Track | undefined {
//     debugger
//     if (participant && participant.tracks) {
//       const trackIterator = participant.tracks.values();
//       const firstTrack = trackIterator.next().value;
//       return firstTrack;
//     }
//     return undefined;
//   }
  

//   ngOnDestroy(): void {
//     // Clean up any resources or subscriptions here
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     // Handle changes to the isAudioMuted property
//     if ('isAudioMuted' in changes) {
//       // Do something when isAudioMuted changes
//     }
//   }

//   handleResize(event: any): void {
//     const width = event.width;
//     const height = event.height;
//     // Implement the logic for resizing here if needed
//   }

//   // Calculate objectFit based on video orientation (you may need to adapt this logic)
//   private calculateObjectFit(): 'contain' | 'cover' {
//     // Implement your logic to determine the objectFit value
//     // Example: Check the aspect ratio of the video
//     // If landscape, use 'cover', if portrait, use 'contain'
//     return 'contain'; // Default to 'contain' for now
//   }
// }

import { Component, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import {
  faMicrophone,
  faMicrophoneSlash,
} from '@fortawesome/free-solid-svg-icons';
import {
  ConnectionQuality,
  LocalTrack,
  Participant,
  RemoteTrack,
} from 'livekit-client';

@Component({
  selector: 'app-participant-view',
  templateUrl: './participant-view.component.html',
  styleUrls: ['./participant-view.component.css'],
})
export class ParticipantViewComponent implements OnInit {
  @Input() participant!: Participant;
  @Input() displayName?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() className?: string;
  @Input() speakerClassName?: string;
  @Input() aspectWidth?: number;
  @Input() aspectHeight?: number;
  @Input() orientation?: 'landscape' | 'portrait';
  @Input() showOverlay?: boolean;
  @Input() showConnectionQuality?: boolean;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() cameraPublication: any;


  isLocal!: boolean;
  connectionQuality!: ConnectionQuality;
  isSpeaking!: boolean;
  videoSize!: string;
  currentBitrate!: number;
  objectFit!: 'contain' | 'cover';
  videoOrientation!: 'landscape' | 'portrait';
  isAudioMuted!: boolean;
  classes: string[] = []; 
  containerStyles: { [key: string]: string } = {};
  handleResize: any;
  context: any;
  ConnectionQuality = ConnectionQuality;
  faMicrophone = faMicrophone;
  faMicrophoneSlash = faMicrophoneSlash;
  isDisplayNameVisible: boolean = false;



  constructor() {
    // Initialize variables here
  }

  ngOnInit(): void {
    // Initialize logic here
    this.classes.push('participant'); // Add any other classes you want

  }
  
    

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Handle window resize
  }
  onMouseEnter(): void {
    // Handle mouse enter event
    this.isDisplayNameVisible = true;
  }
  onMouseLeave():void{
    this.isDisplayNameVisible = false;
  }

  handleClick(): void {
    // Handle the click event here
    this.onClick.emit();
  }
  handleSizeChanged(event: any): void {
    this.handleResize(event.width, event.height);
  }
  

  

  // Add more methods and event listeners as needed
}

