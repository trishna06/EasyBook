import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamLogsComponent } from './stream-logs/stream-logs.component';

const routes: Routes = [{ path: '', component: StreamLogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamRoutingModule {}
