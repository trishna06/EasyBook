import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import * as dotenv from "dotenv";
import { AppModule } from "./app.module";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Also start a Kafka microservice listener (if you want two separate servers)
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: "notification-client",
        brokers: [process.env.KAFKA_BROKER],
      },
      consumer: {
        groupId: process.env.KAFKA_CONSUMER_GROUP,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log("Notification service running on http://localhost:3000");
}
bootstrap();
