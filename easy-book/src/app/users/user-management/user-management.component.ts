import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  displayedColumns: string[] = ['name', 'email', 'actions'];
  users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Sarah Lin', email: 'sarah@example.com' },
  ];
}
