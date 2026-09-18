import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '4px solid #e0354b',
  },
  title: {
    fontSize: '2rem',
    color: '#e0354b',
    margin: 0,
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;
