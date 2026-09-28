import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export function selectCourse(index) {
  return { type: SELECT_COURSE, index };
}

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
}

export function boundCourseActions(dispatch) {
  return bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
}

export function boundSelectCourse(dispatch, index) {
  return dispatch(selectCourse(index));
}

export function boundUnSelectCourse(dispatch, index) {
  return dispatch(unSelectCourse(index));
}