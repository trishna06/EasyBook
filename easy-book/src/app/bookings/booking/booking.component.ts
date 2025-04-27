import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SharedModule } from "../../shared/shared.module";

interface Room {
  id: number;
  number: string;
  type: string;
  status: string;
}

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  rooms: Room[] = []; // This will hold rooms

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      roomId: ["", Validators.required],
      fromDate: ["", Validators.required],
      toDate: ["", Validators.required],
      isAvailable: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    // Later this can come from API, now mocking
    this.rooms = [
      { id: 1, number: "101", type: "Deluxe", status: "Available" },
      { id: 2, number: "102", type: "Standard", status: "Occupied" },
      { id: 3, number: "103", type: "Suite", status: "Available" },
    ];
  }

  onSubmit() {
    // if (this.bookingForm.valid) {
    console.log("Booking data:", this.bookingForm.value);

    // 👉 Here you would call bookingService.createBooking(this.bookingForm.value)
    // } else {
    //   console.log("Booking form is invalid");
    // }
  }
}
