import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  section: {
    marginBottom: '40px',
  },
});

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className={css(styles.section)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
  children: null,
};

export default BodySectionWithMarginBottom;