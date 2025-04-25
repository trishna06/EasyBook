// src/notification/notification.repository.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from "sequelize";
import { FilterLogsDto } from "./dto/filter-logs.dto";
import { Notification } from "./notification.entity";

@Injectable()
export class NotificationRepository {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification
  ) {}

  async create(payload: Partial<Notification>) {
    const { id, ...restPayload } = payload;
    return this.notificationModel.create(restPayload);
  }

  async findAll(filter: FilterLogsDto): Promise<Notification[]> {
    const where: any = {};
    if (filter.type) where.type = filter.type;
    if (filter.user) where.user = { [Op.iLike]: `%${filter.user}%` };
    if (filter.dateFrom || filter.dateTo) {
      where.sentAt = {};
      if (filter.dateFrom) where.sentAt[Op.gte] = new Date(filter.dateFrom);
      if (filter.dateTo) where.sentAt[Op.lte] = new Date(filter.dateTo);
    }
    return this.notificationModel.findAll({
      where,
      order: [["sentAt", "DESC"]],
    });
  }

  async findById(id: string) {
    return this.notificationModel.findByPk(id);
  }
}
