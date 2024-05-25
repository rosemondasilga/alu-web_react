// task_1/dashboard/src/App/App.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  footer: {
    textAlign: 'center',
    fontSize: '12px',
    borderTop: '1px solid #eaeaea',
    padding: '10px 0',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  render() {
    return (
      <div className={css(styles.body)}>
        {/* Your existing components go here */}
        <footer className={css(styles.footer)}>
          Copyright 2020 - holberton School
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
