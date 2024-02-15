import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSelectButtonComponent } from './audio-select-button/audio-select-button.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import { ControlsComponent } from './controls/controls.component';
import { VideoRendererComponent } from './video-renderer/video-renderer.component';
import { VideoSelectButtonComponent } from './video-select-button/video-select-button.component';
import { AudioRendererComponent } from './audio-renderer/audio-renderer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpeakerStageComponent } from './speaker-stage/speaker-stage.component';
import { ParticipantViewComponent } from './participant-view/participant-view.component';
import { StageComponent } from './stage/stage.component';
import { LiveKitRoomComponent } from './live-kit-room/live-kit-room.component';
import { StageViewComponent } from './stage-view/stage-view.component';
import { MobileStageComponent } from './mobile-stage/mobile-stage.component';
import { GridStageComponent } from './grid-stage/grid-stage.component';
import { ScreenShareViewComponent } from './screen-share-view/screen-share-view.component';
import { PreJoinComponent } from '../app-layout/pre-join/pre-join.component';





@NgModule({
  declarations: [
    AudioSelectButtonComponent,
    ControlButtonComponent,
    ControlsComponent,
    VideoRendererComponent,
    VideoSelectButtonComponent,
    AudioRendererComponent,
    SpeakerStageComponent,
    ParticipantViewComponent,
    StageComponent,
    LiveKitRoomComponent,
    StageViewComponent,
    MobileStageComponent,
    GridStageComponent,
    ScreenShareViewComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    VideoRendererComponent,
    AudioSelectButtonComponent,
    VideoSelectButtonComponent,
    ControlButtonComponent,
    AudioRendererComponent,
    SpeakerStageComponent,LiveKitRoomComponent,
    ControlsComponent,
    GridStageComponent,
    ParticipantViewComponent,
    StageComponent,
    StageViewComponent,
    ScreenShareViewComponent,
    LiveKitRoomComponent
    
  ]
})
export class RoomPageModule { }
