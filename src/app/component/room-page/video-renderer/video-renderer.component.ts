// import { Component, Input, ElementRef, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
// import { Track } from 'livekit-client';

// @Component({
//   selector: 'app-video-renderer',
//   templateUrl: './video-renderer.component.html',
//   styleUrls: ['./video-renderer.component.css']
// })
// // export class VideoRendererComponent {


// export class VideoRendererComponent implements OnChanges, AfterViewInit {
//   @Input() track?: Track;
//   @Input() isLocal!: boolean;
//   @Input() isMirrored?: boolean;
//   @Input() objectFit?: string;
//   @Input() className?: string;
//   @Input() width?: string;
//   @Input() height?: string;
//   @Input() onSizeChanged?: (width: number, height: number) => void;
//   @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;


//   ngAfterViewInit(): void {
//     console.log('ngAfterViewInit called');
//     debugger
//     if (this.track && this.track.mediaStreamTrack) {
//       console.log('Video track:', this.track);
//       const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
//       videoElement.srcObject = new MediaStream([this.track.mediaStreamTrack]);
//       videoElement.play().then(() => {
//         console.log('Video playback started');
//         if (this.onSizeChanged) {
//           this.onSizeChanged(videoElement.videoWidth, videoElement.videoHeight);
//         }
//       });
//     }

//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('ngOnChanges called');
//     if (changes['track'] && !changes['track'].firstChange) {
//       if (this.track && this.track.mediaStreamTrack) {
//         const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
//         videoElement.srcObject = new MediaStream([this.track.mediaStreamTrack]);
//         videoElement.play().then(() => {
//           console.log('Video playback started');
//           if (this.onSizeChanged) {
//             this.onSizeChanged(videoElement.videoWidth, videoElement.videoHeight);
//           }
//         });
//       }
//     }
//   }

//   constructor(private videoElement: ElementRef) {}
// }

import { Component, Input, ElementRef, OnChanges, SimpleChanges, AfterViewInit, ViewChild } from '@angular/core';
import { Track } from 'livekit-client';

@Component({
  selector: 'app-video-renderer',
  templateUrl: './video-renderer.component.html',
  styleUrls: ['./video-renderer.component.css']
})
export class VideoRendererComponent implements OnChanges, AfterViewInit {
  @Input() track?: Track;
  @Input() isLocal!: boolean;
  @Input() isMirrored?: boolean;
  @Input() objectFit?: string;
  @Input() className?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() onSizeChanged?: (width: number, height: number) => void;
  

  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.track && this.track.mediaStreamTrack) {
      const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
      videoElement.srcObject = new MediaStream([this.track.mediaStreamTrack]);
      videoElement.play().then(() => {
        if (this.onSizeChanged) {
          this.onSizeChanged(videoElement.videoWidth, videoElement.videoHeight);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['track'] && !changes['track'].firstChange) {
      if (this.track && this.track.mediaStreamTrack) {
        const videoElement: HTMLVideoElement = this.videoElement.nativeElement;
        videoElement.srcObject = new MediaStream([this.track.mediaStreamTrack]);
        videoElement.play().then(() => {
          if (this.onSizeChanged) {
            this.onSizeChanged(videoElement.videoWidth, videoElement.videoHeight);
          }
        });
      }
    }
  }

  constructor() {}
}
