import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  panel: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  title: {
    fontWeight: 'bold',
    margin: '0 0 10px',
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
  },
  item: {
    marginBottom: '5px',
  },
});

function Notifications({ listNotifications }) {
  return (
    <div className={css(styles.panel)}>
      <p className={css(styles.title)}>Notifications</p>
      <ul className={css(styles.list)}>
        {listNotifications.map((notification) => (
          <li className={css(styles.item)} key={notification.id}>
            {notification.html ? <span dangerouslySetInnerHTML={notification.html} /> : notification.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
