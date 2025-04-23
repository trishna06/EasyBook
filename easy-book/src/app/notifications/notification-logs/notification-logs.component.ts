import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-notification-logs',
  templateUrl: './notification-logs.component.html',
  styleUrl: './notification-logs.component.scss',
})
export class NotificationLogsComponent {
  displayedColumns = ['type', 'user', 'message', 'status', 'sentAt', 'actions'];
  notifications = [
    {
      type: 'Email',
      user: 'John',
      message: 'Booking Conf',
      status: 'Sent',
      sentAt: '2025-04-21',
    },
    {
      type: 'SMS',
      user: 'Sarah',
      message: 'Room Cancel',
      status: 'Failed',
      sentAt: '2025-04-21',
    },
  ];
}
