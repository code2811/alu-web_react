import * as notificationsModule from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const notifications = notificationsModule.default || notificationsModule;

export const user = new schema.Entity('users');
export const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
export const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
export const normalized = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const result = [];

  for (const notificationId of normalized.result) {
    const currentNotification = normalized.entities.notifications[notificationId];
    if (currentNotification.author === userId) {
      result.push(currentNotification);
    }
  }

  return result;
}