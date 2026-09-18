import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    borderCollapse: 'collapse',
  },
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.list)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      credit: PropTypes.number,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
