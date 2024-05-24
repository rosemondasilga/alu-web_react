// src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello, Webpack and React!')).toBeInTheDocument();
});
