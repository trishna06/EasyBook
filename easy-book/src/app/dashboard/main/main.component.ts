import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isAdmin() {
    // return localStorage.getItem('role') === 'admin';
    return true;
  }
}
