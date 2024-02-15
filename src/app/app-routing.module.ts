import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './component/app-layout/room/room.component';
import { PreJoinComponent } from './component/app-layout/pre-join/pre-join.component';
import { ParticipantViewComponent } from './component/room-page/participant-view/participant-view.component';
import { SpeakerStageComponent } from './component/room-page/speaker-stage/speaker-stage.component';
import { VideoRendererComponent } from './component/room-page/video-renderer/video-renderer.component';

const routes: Routes = [
  { path: 'room', component: RoomComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pre-join' },
  { path: 'pre-join', component: PreJoinComponent },
  {path:"participant",component:ParticipantViewComponent},
  {path:"video",component:VideoRendererComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
