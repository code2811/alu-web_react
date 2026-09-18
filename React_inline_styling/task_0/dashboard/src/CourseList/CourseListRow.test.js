import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('applies the default row background color', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="ES6" textSecondCell={60} />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#f5f5f5ab' });
  });

  it('applies the header row background color', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Available courses" isHeader />);
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: '#deb5b545' });
  });
});
