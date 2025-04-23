import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
