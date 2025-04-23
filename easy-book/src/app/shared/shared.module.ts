import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
