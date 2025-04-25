// src/notification/notification.service.ts
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { FilterLogsDto } from "./dto/filter-logs.dto";
import { NotificationRepository } from "./notification.repository";

@Injectable()
export class NotificationService implements OnModuleInit {
  constructor(
    private readonly notificationRepo: NotificationRepository,

    @Inject("NOTIFICATION_PRODUCER")
    private readonly kafkaClient: ClientKafka
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf("notifications");
    await this.kafkaClient.connect();
  }

  async handleMessage(payload: any) {
    return this.notificationRepo.create({
      type: payload.type,
      user: payload.user,
      message: payload.message,
      status: payload.status,
    });
  }

  async findAll(filter: FilterLogsDto) {
    return this.notificationRepo.findAll(filter);
  }

  async resend(id: string): Promise<void> {
    const notif = await this.notificationRepo.findById(id);
    if (!notif) throw new Error("Notification not found");
    this.kafkaClient.emit("notifications", {
      type: notif.type,
      user: notif.user,
      message: notif.message,
      status: notif.status,
    });
  }
}
