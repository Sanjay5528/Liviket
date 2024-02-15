// import { Component, OnInit } from '@angular/core';
// import { LocalVideoTrack, createLocalVideoTrack } from 'livekit-client';
// import { Params, Router } from '@angular/router';

// @Component({
//   selector: 'app-pre-join',
//   templateUrl: './pre-join.component.html',
//   styleUrls: ['./pre-join.component.css'],
// })
// export class PreJoinComponent{}




import { Component, OnInit } from '@angular/core';
import { LocalVideoTrack, Room, createLocalVideoTrack } from 'livekit-client';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-pre-join',
  templateUrl: './pre-join.component.html',
  styleUrls: ['./pre-join.component.css'],
})
export class PreJoinComponent implements OnInit {
  storedUrl = 'http://16.170.100.91:7880/';
  storedToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjUyOTQwODE1MTYsImlzcyI6IktyaXlhVGVjIiwibmJmIjoxNjk0MDgxNTE2LCJzdWIiOiJiYXNrYXIiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuUHVibGlzaFNvdXJjZXMiOlsiY2FtZXJhIiwibWljcm9waG9uZSIsInNjcmVlbl9zaGFyZSIsInNjcmVlbl9zaGFyZV9hdWRpbyJdLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJyMSIsInJvb21Kb2luIjp0cnVlfX0.f7jHdX45O7r3K7_cpOnIzx2OEeJJmNTjLM0cCPfVf4w'; // Replace with your actual token

  url = this.storedUrl;
  token = this.storedToken;
  simulcast = true;
  dynacast = true;
  adaptiveStream = true;
  videoEnabled = false;
  audioEnabled = true;
  connectDisabled = true;
  videoTrack?: LocalVideoTrack;
  audioDevice: MediaDeviceInfo | undefined;
  videoDevice: MediaDeviceInfo | undefined;
  requestPermissions: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    sessionStorage.setItem("jobId","")
    if (this.token && this.url) {
      this.connectDisabled = false;
    } else {
      this.connectDisabled = true;
    }
  }

  toggleVideo(): void {
    debugger
    const devices = Room.getLocalDevices('audioinput', this.requestPermissions);
    if (this.videoTrack) {
      // If video track exists, attempt to stop it
      try {
        this.videoTrack.stop();
      } catch (error) {
        console.error('Error stopping video track:', error);
      }
      this.videoEnabled = false;
      this.videoTrack = undefined;
    } else {
      // If video track doesn't exist, create it
      createLocalVideoTrack({
      
        deviceId: this.videoDevice?.deviceId,
      })
        .then((track: LocalVideoTrack) => {
          // Assign the created video track to this.videoTrack
          this.videoTrack = track;
          this.videoEnabled = true;
        })
        .catch((error) => {
          console.error('Error creating video track:', error);
        });
    }
  }
  





  // toggleVideo(): void {
  //   debugger
  //   if (this.videoTrack) {
  //     this.videoTrack.stop();
  //     this.videoEnabled = false;
  //     this.videoTrack = undefined;
  //   } else {
  //     createLocalVideoTrack({
  //       deviceId: this.videoDevice?.deviceId,
  //     }).then((track) => {
  //       this.videoEnabled = true;
  //       this.videoTrack = track;
  //     });
  //   }
  // }

  toggleAudio(): void {
    debugger
    this.audioEnabled = !this.audioEnabled;
  }

   setAudioDevice(device: MediaDeviceInfo): void {
    debugger
    console.log('Selected Audio Device:', device);
    this.audioDevice = device;
  }

  selectVideoDevice(device: MediaDeviceInfo): void {
    debugger
    this.videoDevice = device;
    if (this.videoTrack) {
      if (
        this.videoTrack.mediaStreamTrack.getSettings().deviceId ===
        device.deviceId
      ) {
        return;
      }
      this.videoTrack.stop();
    }
  }

  handleButtonClick() {
    // Implement the logic to handle the button click event here.
    // You can perform actions like enabling/disabling video, requesting permissions, etc.
  }

 

  connectToRoom(): void {
    debugger
    if (this.videoTrack) {
      this.videoTrack.stop();
    }

    if (
      window.location.protocol === 'https:' &&
      this.url.startsWith('ws://') &&
      !this.url.startsWith('ws://localhost')
    ) {
      alert('Unable to connect to insecure websocket from https');
      return;
    }

    const queryParams: any = {
      url: this.url,
      token: this.token,
      videoEnabled: this.videoEnabled ? '1' : '0',
      audioEnabled: this.audioEnabled ? '1' : '0',
      simulcast: this.simulcast ? '1' : '0',
      dynacast: this.dynacast ? '1' : '0',
      adaptiveStream: this.adaptiveStream ? '1' : '0',
    };

    if (this.audioDevice) {
      queryParams['audioDeviceId'] = this.audioDevice.deviceId;
    }
    if (this.videoDevice) {
      queryParams['videoDeviceId'] = this.videoDevice.deviceId;
    } else if (this.videoTrack) {
      // pass along current device id to ensure camera device match
      this.videoTrack.getDeviceId().then((deviceId) => {
        if (deviceId) {
          queryParams['videoDeviceId'] = deviceId;
        }
        this.navigateWithParams(queryParams);
      });
    } else {
      this.navigateWithParams(queryParams);
    }
  }

  navigateWithParams(queryParams: Params): void {
    debugger
    this.router.navigate(['/room'], { queryParams });

  }
}
