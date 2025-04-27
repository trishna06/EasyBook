import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StreamLogsComponent } from './stream-logs/stream-logs.component';
import { StreamRoutingModule } from './stream-routing.module';

@NgModule({
  declarations: [StreamLogsComponent],
  imports: [CommonModule, StreamRoutingModule, SharedModule],
})
export class StreamModule {}
