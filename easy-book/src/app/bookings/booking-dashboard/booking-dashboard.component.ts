import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BookingComponent } from "../booking/booking.component";

@Component({
  standalone: false,
  selector: "app-booking-dashboard",
  templateUrl: "./booking-dashboard.component.html",
  styleUrl: "./booking-dashboard.component.scss",
})
export class BookingDashboardComponent {
  constructor(private dialog: MatDialog) {}

  openBookingCreation(): void {
    const dialogRef = this.dialog.open(BookingComponent, {
      width: "500px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("Dialog closed with user data:", result);
        // You can refresh your user list here
      } else {
        console.log("Dialog closed without creating user");
      }
    });
  }
  displayedColumns = [
    "bookingId",
    "user",
    "room",
    "dates",
    "status",
    "actions",
  ];
  bookings = [
    {
      id: "B00123",
      user: "John",
      room: 101,
      dates: "May 1–5",
      status: "Confirmed",
    },
    {
      id: "B00124",
      user: "Sarah",
      room: 102,
      dates: "May 3–6",
      status: "Cancelled",
    },
  ];
}
