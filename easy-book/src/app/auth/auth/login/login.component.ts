import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private router: Router) {}

  login() {
    // Assume role stored in localStorage after dummy auth
    localStorage.setItem(
      'role',
      this.email === 'admin@hotel.com' ? 'admin' : 'customer'
    );
    this.router.navigate(['/dashboard']);
  }
}
