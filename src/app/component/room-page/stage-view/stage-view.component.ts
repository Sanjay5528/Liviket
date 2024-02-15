import { Component, OnInit, Input } from '@angular/core';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { Track, VideoTrack } from 'livekit-client';
import { DisplayOptions } from 'src/app/services/display-options.service';

@Component({
  selector: 'app-stage-view',
  templateUrl: './stage-view.component.html',
  styleUrls: ['./stage-view.component.css']
})
export class StageViewComponent implements OnInit {
  @Input() displayOptions: DisplayOptions = {}; // Input for display options
  @Input() isMobile!: boolean;
  @Input() room: any; // Adjust the type as needed
  @Input() participants!: any[]; // Adjust the type as needed

  mainElement: any; // Adjust the type as needed
  audioTracks!: any[]; // Adjust the type as needed
  canPlaybackAudio!: boolean;

  faVolumeMute: IconDefinition = faVolumeMute;

  constructor() { }

  ngOnInit() {
    // Find the screen track
    let screenTrack: VideoTrack | undefined;
    this.participants.forEach((p) => {
      if (!screenTrack) {
        const track = p.getTrack(Track.Source.ScreenShare);
        if (track?.isSubscribed && track.videoTrack) {
          screenTrack = track.videoTrack;
        }
      }
    });

    // Determine the mainElement based on displayOptions
    if (this.displayOptions.stageLayout === 'grid' && !screenTrack) {
      this.mainElement = 'GridStage'; // Replace with your Angular component
    } else {
      this.mainElement = 'SpeakerStage'; // Replace with your Angular component
    }

    // Assuming this.audioTracks is set to your audio tracks data
    // this.audioTracks = this.stageProps.roomState.audioTracks;
    // this.canPlaybackAudio = this.room?.canPlaybackAudio === false;
  }

  onUnmuteClick() {
    // Implement the logic to unmute audio here
    // For example:
    // this.room.startAudio();
  }
}
