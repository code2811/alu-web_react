import React from 'react';
import PropTypes from 'prop-types';

function BodySection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySection.defaultProps = {
  title: '',
  children: null,
};

export default BodySection;