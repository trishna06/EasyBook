import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDashboardComponent } from './booking-dashboard/booking-dashboard.component';

const routes: Routes = [{ path: '', component: BookingDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
