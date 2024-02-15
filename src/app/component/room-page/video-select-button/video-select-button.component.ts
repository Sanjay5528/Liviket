

// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-video-select-button',
//   templateUrl: './video-select-button.component.html',
//   styleUrls: ['./video-select-button.component.css']
// })
// export class VideoSelectButtonComponent {
//   @Input() isEnabled: boolean = false;
//   @Input() disableText: string = 'Disable Video';
//   @Input() enableText: string = 'Enable Video';
//   @Input() requestPermissions: boolean = false;
//   @Input() className: string | undefined;
//   @Input() isButtonDisabled: boolean = false;
//   @Input() popoverContainerClassName: string | undefined;
//   @Input() popoverTriggerBtnClassName: string | undefined;
//   selectedDevice: MediaDeviceInfo | null = null;

//   @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
//   @Output() onSourceSelected: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();
//   @Output() sourceSelected: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();

//   requestMediaPermissions() {
//     // Implement your logic to request media permissions here
//     // You can emit the selected device using `this.onSourceSelected.emit(this.selectedDevice)`
//     // Ensure `this.selectedDevice` is set when a device is selected.
//   }


//   handleClick() {
//     this.isEnabled=!this.isEnabled
//     this.onClick.emit(this.isEnabled);
//   }



//   // Method to select a device
//   selectDevice(device: MediaDeviceInfo) {
//     this.selectedDevice = device;
//     this.onSourceSelected.emit(device);
//   }
  
// }



import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Room } from 'livekit-client';

export interface MenuItem {
  label: string;
}

@Component({
  selector: 'app-video-select-button',
  templateUrl: './video-select-button.component.html',
  styleUrls: ['./video-select-button.component.css']
})
export class VideoSelectButtonComponent implements OnInit, OnDestroy {
  @Input() isEnabled: boolean = false;
  @Input() disableText: string = 'Disable Video';
  @Input() enableText: string = 'Enable Video';
  @Input() requestPermissions: boolean = true;
  @Input() className: string = '';
  @Input() isButtonDisabled: boolean = false;
  @Input() popoverContainerClassName: string = ''; // Update to your needs
  @Input() popoverTriggerBtnClassName: string = ''; // Update to your needs
  @Input() popoverTriggerBtnSeparatorClassName!: string;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() sourceSelected: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();

  sources: MediaDeviceInfo[] = [];
  menuItems: MenuItem[] = [];

  ngOnInit() {
    debugger
    this.listVideoDevices();
    navigator.mediaDevices.addEventListener('devicechange', this.listVideoDevices);
  }

  ngOnDestroy() {
    navigator.mediaDevices.removeEventListener('devicechange', this.listVideoDevices);
  }

  async listVideoDevices() {
    const devices = await Room.getLocalDevices('videoinput', this.requestPermissions);
    this.sources = devices;
    this.menuItems = devices.map((item) => ({ label: item.label }));
  }

  handleClick() {
    this.isEnabled = !this.isEnabled;
    this.onClick.emit(this.isEnabled);
  }

  handleMenuItem(item: MenuItem) {
    const device = this.sources.find((d) => d.label === item.label);
    if (device && this.sourceSelected) {
      this.sourceSelected.emit(device);
    }
  }
}
