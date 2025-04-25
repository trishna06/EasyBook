import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { FilterLogsDto } from "./dto/filter-logs.dto";
import { NotificationService } from "./notification.service";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly service: NotificationService) {}

  @Get()
  async getLogs(@Query() filter: FilterLogsDto) {
    return this.service.findAll(filter);
  }

  @Post(":id/resend")
  async resend(@Param("id") id: string) {
    await this.service.resend(id);
    return { success: true };
  }
}
