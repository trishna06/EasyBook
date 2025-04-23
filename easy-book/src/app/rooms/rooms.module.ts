import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RoomManagementComponent } from './room-management/room-management.component';
import { RoomsRoutingModule } from './rooms-routing.module';

@NgModule({
  declarations: [RoomManagementComponent],
  imports: [CommonModule, RoomsRoutingModule, SharedModule],
})
export class RoomsModule {}
