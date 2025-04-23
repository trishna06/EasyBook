import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrl: './room-management.component.scss',
})
export class RoomManagementComponent {
  displayedColumns = ['roomNumber', 'type', 'status', 'actions'];
  rooms = [
    { number: 101, type: 'King', status: 'Available' },
    { number: 102, type: 'Twin', status: 'Maintenance' },
  ];
}
