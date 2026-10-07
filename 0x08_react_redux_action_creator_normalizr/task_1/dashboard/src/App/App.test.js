import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with class App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });
});

describe('mapStateToProps', () => {
  it('maps login and drawer state', () => {
    const state = { get: (key) => ({ isUserLoggedIn: true, isNotificationDrawerVisible: true })[key] };

    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true, displayDrawer: true });
  });
});
