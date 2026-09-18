import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: '#000',
  },
  urgent: {
    color: '#e0354b',
  },
});

function NotificationItem({ type, value, html }) {
  return (
    <li className={css(type === 'urgent' ? styles.urgent : styles.default)}>
      {html ? <span dangerouslySetInnerHTML={html} /> : value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
};

export default NotificationItem;
