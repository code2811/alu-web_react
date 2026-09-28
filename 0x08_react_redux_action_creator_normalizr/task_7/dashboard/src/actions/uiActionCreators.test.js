import { loginFailure, loginRequest, loginSuccess } from './uiActionCreators';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';

test('creates login success and failure actions', () => {
  expect(loginSuccess()).toEqual({ type: LOGIN_SUCCESS });
  expect(loginFailure()).toEqual({ type: LOGIN_FAILURE });
});

test('loginRequest dispatches login then success', async () => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
  const dispatch = jest.fn();

  await loginRequest('user@example.com', 'password')(dispatch);

  expect(dispatch.mock.calls[0][0]).toEqual({
    type: LOGIN,
    user: { email: 'user@example.com', password: 'password' },
  });
  expect(dispatch.mock.calls[1][0]).toEqual({ type: LOGIN_SUCCESS });
});

test('loginRequest dispatches login then failure', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('network failure')));
  const dispatch = jest.fn();

  await loginRequest('user@example.com', 'password')(dispatch);

});