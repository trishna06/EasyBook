import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
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

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"],
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
export class RoomComponent {
  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      id: ["", Validators.required],
      userId: ["", Validators.required],
      roomId: ["", Validators.required],
      type: ["", Validators.required],
      status: ["", Validators.required],
    });
  }

  onSubmit() {
    // if (this.roomForm.valid) {
    // Todo take user if from session storage
    console.log("Room data submitted:", this.roomForm.value);

    // 👉 You can call your API service here to save room data
    // } else {
    //   console.log("Room form is invalid");
    // }
  }
}
