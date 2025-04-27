import { Component } from "@angular/core";
import { RoomManagerService } from "../../services/room-manager.services";
import { RoomAvailabilityModel, RoomModel } from "../../models/room.model";

@Component({
  standalone: false,
  selector: "app-stream-logs",
  templateUrl: "./stream-logs.component.html",
  styleUrl: "./stream-logs.component.scss",
})
export class StreamLogsComponent {
  displayedColumns = ["roomNumber", "status", "updatedDateTime"];
  streams: RoomAvailabilityModel[] = [];
  rooms: RoomModel[] = [];

  constructor(private roomManagerService: RoomManagerService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.fetch();
    }, 5000);
  }

  fetch() {
    this.roomManagerService.get().subscribe({
      next: (response) => {
        this.rooms = response;
        this.roomManagerService.stream().subscribe({
          next: (response) => {
            this.streams = response;
            this.streams.forEach((stream) => {
              let room = this.rooms.find(r => r.id == stream.roomId);
              stream.roomNumber = room?.number ?? stream.roomId.toString();
            })
          },
          error: (err) => console.error("GET Error:", err),
        });
      },
      error: (err) => console.error("GET Error:", err),
    });    
  }
}
