import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { FilterLogsDto } from './notification.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly notificationRepo: NotificationRepository,

    @Inject('NOTIFICATION_PRODUCER')
    private readonly kafkaClient: ClientKafka,
  ) {}

  async handleMessage(payload: any) {
    return this.notificationRepo.create({
      type: payload.type,
      user: payload.user,
      message: payload.message,
      status: payload.status,
    });
  }
  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('notifications');
    await this.kafkaClient.connect();
  }

  async findAll(filter: FilterLogsDto) {
    return this.notificationRepo.findAll(filter);
  }

  async resend(id: number): Promise<void> {
    const notif = await this.notificationRepo.findById(id);
    console.log('data is', notif);
    if (!notif) throw new Error('Notification not found');
    this.kafkaClient.emit('notifications', {
      type: notif.type,
      user: notif.user,
      message: notif.message,
      status: notif.status,
    });
  }
}
