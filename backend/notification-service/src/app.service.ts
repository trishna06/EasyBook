import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { FilterLogsDto } from './notification.dto';
import { NotificationRepository } from './notification.repository';
import { NotificationInterface } from './NotificationInterface';

@Injectable()
export class AppService {
  constructor(
    private readonly notificationRepo: NotificationRepository,

    @Inject('NOTIFICATION_PRODUCER')
    private readonly kafkaClient: ClientKafka,
  ) {}

  async handleMessage(payload: NotificationInterface) {
    return this.notificationRepo.create({
      type: payload.type,
      user: payload.user,
      message: payload.message,
      status: payload.status,
    });
  }
  async onModuleInit() {
    // this.kafkaClient.subscribeToResponseOf('notifications');
    await this.kafkaClient.connect();
  }

  // @MessagePattern('notifications') // Listening to 'notifications' topic

  async findAll(filter: FilterLogsDto) {
    return this.notificationRepo.findAll(filter);
  }

  async resend(id: number): Promise<void> {
    const notif = await this.notificationRepo.findById(id);
    const messagePayload = notif.dataValues;
    if (!notif) throw new Error('Notification not found');
    this.kafkaClient.emit('notifications', {
      type: messagePayload.type,
      user: messagePayload.user,
      message: messagePayload.message,
      status: messagePayload.status,
    });
  }
}
