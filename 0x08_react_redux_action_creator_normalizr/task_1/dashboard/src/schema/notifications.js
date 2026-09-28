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
export default normalized;