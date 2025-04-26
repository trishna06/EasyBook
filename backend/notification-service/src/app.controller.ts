import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FilterLogsDto } from './notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('logs')
  async getLogs(@Query() filter: FilterLogsDto): Promise<FilterLogsDto[]> {
    return this.appService.findAll(filter);
  }

  @Post(':id/resend')
  async resend(@Param('id') id: number): Promise<{ success: boolean }> {
    await this.appService.resend(id);
    return { success: true };
  }
}
