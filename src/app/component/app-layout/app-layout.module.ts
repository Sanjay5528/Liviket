import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreJoinComponent } from './pre-join/pre-join.component';
import { RoomComponent } from './room/room.component';
import { FormsModule } from '@angular/forms';
import { RoomPageModule } from '../room-page/room-page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PreJoinComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoomPageModule,
    FontAwesomeModule
  ],
  exports:[
    PreJoinComponent
  ]
})
export class AppLayoutModule { }
