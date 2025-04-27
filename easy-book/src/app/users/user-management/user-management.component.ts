import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SignupComponent } from "../../auth/signup/signup.component";

@Component({
  standalone: false,
  selector: "app-user-management",
  templateUrl: "./user-management.component.html",
  styleUrl: "./user-management.component.scss",
})
export class UserManagementComponent {
  constructor(private dialog: MatDialog) {}
  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
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

  displayedColumns: string[] = ["name", "email", "actions"];
  users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Sarah Lin", email: "sarah@example.com" },
  ];
}
