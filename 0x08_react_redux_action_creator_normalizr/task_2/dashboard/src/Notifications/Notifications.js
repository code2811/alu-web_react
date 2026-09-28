import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ listNotifications }) {
  return (
    <div className="Notifications">
      <p>Notifications</p>
      <ul>
        {listNotifications.map((notification) => (
          <li key={notification.id}>
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
