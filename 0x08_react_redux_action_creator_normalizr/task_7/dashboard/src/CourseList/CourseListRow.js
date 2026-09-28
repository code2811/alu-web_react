import React from 'react';
import PropTypes from 'prop-types';

const rowStyles = {
  defaultRow: { backgroundColor: '#f5f5f5ab' },
  headerRow: { backgroundColor: '#deb5b545' },
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader ? rowStyles.headerRow : rowStyles.defaultRow;

  if (isHeader) {
    return (
      <tr style={style}>
        {textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan={2}>{textFirstCell}</th>
        )}
      </tr>
    );
  }

  return (
    <tr style={style}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
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
