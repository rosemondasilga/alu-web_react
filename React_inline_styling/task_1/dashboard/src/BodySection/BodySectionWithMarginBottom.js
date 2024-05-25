// task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px', // Adjust the margin value as needed
  },
});

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.marginBottom)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
