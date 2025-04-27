export interface NotificationInterface {
  type: string;
  user: string;
  message: string;
  status: string;
  id?: number;
  sentAt?: Date;
}
