import { Map } from 'immutable';

const initialState = Map({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
});

export default function uiReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
