import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.loginContainer)}>
      <form className={css(styles.formContainer)}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" className={css(styles.inputField)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className={css(styles.inputField)} />

        <button type="submit" className={css(styles.submitButton)}>Login</button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    margin: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    marginBottom: '10px',
    padding: '5px',
  },
  submitButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
});

export default Login;
