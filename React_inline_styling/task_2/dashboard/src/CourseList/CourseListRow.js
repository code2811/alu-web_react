import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: { backgroundColor: '#f5f5f5ab' },
  headerRow: { backgroundColor: '#deb5b545' },
  defaultCell: { padding: '10px' },
  headerCell: { padding: '10px', textAlign: 'left' },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const cellStyle = isHeader ? styles.headerCell : styles.defaultCell;

  if (isHeader) {
    return (
      <tr className={css(rowStyle)}>
        {textSecondCell ? (
          <>
            <th className={css(cellStyle)}>{textFirstCell}</th>
            <th className={css(cellStyle)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(cellStyle)} colSpan={2}>{textFirstCell}</th>
        )}
      </tr>
    );
  }

  return (
    <tr className={css(rowStyle)}>
      <td className={css(cellStyle)}>{textFirstCell}</td>
      <td className={css(cellStyle)}>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: '',
};

export default CourseListRow;
