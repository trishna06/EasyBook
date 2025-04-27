import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../core/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [authGuard],
        data: { role: 'admin' },
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('../rooms/rooms.module').then((m) => m.RoomsModule),
        canActivate: [authGuard],
        data: { role: 'admin' },
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('../bookings/bookings.module').then((m) => m.BookingsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
        canActivate: [authGuard],
        data: { role: 'admin' },
      },
      {
        path: 'dashbaord',
        loadChildren: () =>
          import('../stream/stream.module').then(
            (m) => m.StreamModule
          ),
        canActivate: [authGuard],
        data: { role: 'admin' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
