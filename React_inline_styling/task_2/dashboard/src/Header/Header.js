import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src="task_1/dashboard/src/holberton-logo 2.png" alt="Header Logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>Header Title</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightblue',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
});

export default Header;
