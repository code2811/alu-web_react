import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

function Notifications({ listNotifications }) {
  return (
    <div className="Notifications">
      <p>Notifications</p>
      <ul>
        {listNotifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    }),
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
