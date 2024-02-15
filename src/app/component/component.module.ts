import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { FormsModule } from '@angular/forms';
import { RoomPageModule } from './room-page/room-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     AppLayoutModule,
     FormsModule,
     RoomPageModule
  ]
})
export class ComponentModule { }
