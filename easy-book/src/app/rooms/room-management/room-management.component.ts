import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { RoomComponent } from "../room-creation/room.component";

@Component({
  standalone: false,
  selector: "app-room-management",
  templateUrl: "./room-management.component.html",
  styleUrl: "./room-management.component.scss",
})
export class RoomManagementComponent {
  constructor(private dialog: MatDialog) {}
  openRoomCreation(): void {
    const dialogRef = this.dialog.open(RoomComponent, {
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

  displayedColumns = ["roomNumber", "type", "status", "actions"];
  rooms = [
    { number: 101, type: "King", status: "Available" },
    { number: 102, type: "Twin", status: "Maintenance" },
  ];
}
