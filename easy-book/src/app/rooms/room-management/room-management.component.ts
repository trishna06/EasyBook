import { Component } from "@angular/core";
import { RoomManagerService } from "../../services/room-manager.services";
import { RoomModel } from "../../models/room.model";
import { MatDialog } from "@angular/material/dialog";
import { AddRoomComponent } from "../edit-room/edit-room.component";

@Component({
  standalone: false,
  selector: "app-room-management",
  templateUrl: "./room-management.component.html",
  styleUrl: "./room-management.component.scss",
})
export class RoomManagementComponent {
  constructor(private roomManagerService: RoomManagerService,
    private dialog: MatDialog
  ) {}

  displayedColumns = ["roomNumber", "type", "status", "actions"];
  rooms: RoomModel[] = [];
  room: RoomModel | null = null;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.roomManagerService.get().subscribe({
      next: (response) => {
        this.rooms = response;
        console.log(this.room);
      },
      error: (err) => console.error("GET Error:", err),
    });
  }

  deleteRoom(id: number): void {    
    this.roomManagerService.delete(id).subscribe({
      next: (response) => {
        this.fetchData();
        console.log("POST Success:", response);
      },
      error: (err) => console.error("POST Error:", err),
    });
  }

  openAddRoom() {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchData();
        console.log('Room added:', result);
      }
    });
  }

  editRoom(room: RoomModel): void {    
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '400px',
      data: room
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchData();
        console.log('Room updated:', result);
      }
    });
  }
}
