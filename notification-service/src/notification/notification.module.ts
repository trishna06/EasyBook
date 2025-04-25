// src/notification/notification.module.ts
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { SequelizeModule } from "@nestjs/sequelize";
import * as dotenv from "dotenv";
import { NotificationController } from "./notification.controller";
import { NotificationRepository } from "./notification.repository";
import { NotificationService } from "./notification.service";

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forFeature([Notification]),
    ClientsModule.register([
      {
        name: "NOTIFICATION_PRODUCER",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "notification-producer",
            brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
          },
          producer: {},
        },
      },
    ]),
  ],
  providers: [NotificationService, NotificationRepository],
  controllers: [NotificationController],
})
export class NotificationModule {}
