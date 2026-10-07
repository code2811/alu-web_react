import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
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
  it('returns isLoggedIn from the ui reducer state', () => {
    const state = fromJS({ isUserLoggedIn: true });

    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});
