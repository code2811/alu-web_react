import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

test('creates a mark-as-read action', () => {
  expect(markAsAread(1)).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('creates a notification filter action', () => {
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
    type: SET_TYPE_FILTER,
    filter: 'DEFAULT',
  });
});