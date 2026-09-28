import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from './uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from './uiActionTypes';

test('creates a login action', () => {
  expect(login('test@example.com', 'password')).toEqual({
    type: LOGIN,
    user: { email: 'test@example.com', password: 'password' },
  });
});

test('creates the UI actions', () => {
  expect(logout()).toEqual({ type: LOGOUT });
  expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
});