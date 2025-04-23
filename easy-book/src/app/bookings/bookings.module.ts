import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';
import { BookingsRoutingModule } from './bookings-routing.module';

@NgModule({
  declarations: [BookingDashboardComponent],
  imports: [CommonModule, BookingsRoutingModule, SharedModule],
})
export class BookingsModule {}
