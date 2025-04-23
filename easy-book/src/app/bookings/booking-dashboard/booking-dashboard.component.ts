import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-booking-dashboard',
  templateUrl: './booking-dashboard.component.html',
  styleUrl: './booking-dashboard.component.scss',
})
export class BookingDashboardComponent {
  displayedColumns = [
    'bookingId',
    'user',
    'room',
    'dates',
    'status',
    'actions',
  ];
  bookings = [
    {
      id: 'B00123',
      user: 'John',
      room: 101,
      dates: 'May 1–5',
      status: 'Confirmed',
    },
    {
      id: 'B00124',
      user: 'Sarah',
      room: 102,
      dates: 'May 3–6',
      status: 'Cancelled',
    },
  ];
}
