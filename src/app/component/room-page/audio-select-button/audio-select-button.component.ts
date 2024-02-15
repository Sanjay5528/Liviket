// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-audio-select-button',
//   templateUrl: './audio-select-button.component.html',
//   styleUrls: ['./audio-select-button.component.css']
// })
// export class AudioSelectButtonComponent {
//   @Input() isMuted: boolean = false;
//   @Input() isButtonDisabled: boolean = false;
//   @Input() muteText: string = 'Mute'; // Provide default values
//   @Input() unmuteText: string = 'Unmute'; // Provide default values
//   @Input() className: string = '';
//   @Input() requestPermissions: boolean = false;

//   @Output() isMutedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
//   @Output() onSourceSelected: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();



//   handleClick() {
//     this.isMuted = !this.isMuted;
//     this.isMutedChange.emit(this.isMuted); // Emit the isMuted value
//   }

//   handleSourceSelected(device: MediaDeviceInfo) {
//     this.onSourceSelected.emit(device); // Emit the selected audio device
//   }
// }





import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { Room } from 'livekit-client';

export interface MenuItem {
  label: string;
}

@Component({
  selector: 'app-audio-select-button',
  templateUrl: './audio-select-button.component.html',
  styleUrls: ['./audio-select-button.component.css']
})
export class AudioSelectButtonComponent implements OnInit, OnDestroy {
  @Input() isMuted: boolean = false;
  @Input() isButtonDisabled: boolean = false;
  @Input() muteText: string = 'Mute';
  @Input() unmuteText: string = 'Unmute';
  @Input() requestPermissions: boolean = true;
  @Input() className: string = '';
  @Input()
  popoverContainerClassName!: string;
  @Input() popoverTriggerBtnClassName!: string;
  @Input() popoverTriggerBtnSeparatorClassName!: string;

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSourceSelected: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();
  @Output() isMutedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  sources: MediaDeviceInfo[] = [];
  menuItems: MenuItem[] = [];

  ngOnInit() {
    debugger
    this.listAudioDevices();
    navigator.mediaDevices.addEventListener('devicechange', this.listAudioDevices);
  }

  ngOnDestroy() {
    navigator.mediaDevices.removeEventListener('devicechange', this.listAudioDevices);
  }

  async listAudioDevices() {
    const devices = await Room.getLocalDevices('audioinput', this.requestPermissions);
    this.sources = devices;
    this.menuItems = devices.map((item) => ({ label: item.label }));
  }


  handleClick() {
    this.isMuted = !this.isMuted;
    this.isMutedChange.emit(this.isMuted); // Emit the isMuted value
  }


  handleMenuItem(item: MenuItem) {
    debugger
    const device = this.sources.find((d) => d.label === item.label);
    if (device && this.onSourceSelected) {
      this.onSourceSelected.emit(device);
    }
  }
}

