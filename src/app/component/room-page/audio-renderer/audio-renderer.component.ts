import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Track } from 'livekit-client';


@Component({
  selector: 'app-audio-renderer',
  templateUrl: './audio-renderer.component.html',
  styleUrls: ['./audio-renderer.component.css']
})

export class AudioRendererComponent implements OnInit, OnDestroy {
  @Input() track?: Track;
  @Input() isLocal!: boolean;
  @Input() className?: string;
  @ViewChild('audioElement', { static: true }) audioElement!: ElementRef<HTMLVideoElement>;
  
  ngOnInit(): void {
    this.attachAudioTrack();
  }

  ngOnDestroy(): void {
    this.detachAudioTrack();
  }

  private attachAudioTrack() {
    if (this.track && this.track.mediaStreamTrack && this.track.mediaStreamTrack instanceof MediaStreamTrack) {
      const audioElement: HTMLAudioElement = this.audioElement.nativeElement;
      audioElement.srcObject = new MediaStream([this.track.mediaStreamTrack]);
      audioElement.play();
    }
  }

  private detachAudioTrack() {
    if (this.track) {
      const audioElement: HTMLAudioElement = this.audioElement.nativeElement;
      audioElement.srcObject = null;
    }
  }

  constructor() {}
}
