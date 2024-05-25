// task_0/dashboard/src/CourseList/CourseListRow.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseListRow from './CourseListRow';

test('renders a row with correct styles for non-header row', () => {
  const { container } = render(<CourseListRow textFirstCell="test" textSecondCell="test" />);
  expect(container.firstChild).toHaveStyle('background-color: #f5f5f5ab');
});

test('renders a row with correct styles for header row', () => {
  const { container } = render(<CourseListRow isHeader textFirstCell="test" textSecondCell="test" />);
  expect(container.firstChild).toHaveStyle('background-color: #deb5b545');
});

test('renders a header row with one cell correctly', () => {
  const { getByText } = render(<CourseListRow isHeader textFirstCell="Header" textSecondCell={null} />);
  const thElement = getByText('Header');
  expect(thElement).toBeInTheDocument();
  expect(thElement).toHaveAttribute('colSpan', '2');
});

test('renders a header row with two cells correctly', () => {
  const { getByText } = render(<CourseListRow isHeader textFirstCell="Header 1" textSecondCell="Header 2" />);
  expect(getByText('Header 1')).toBeInTheDocument();
  expect(getByText('Header 2')).toBeInTheDocument();
});

test('renders a regular row with two cells correctly', () => {
  const { getByText } = render(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
  expect(getByText('Cell 1')).toBeInTheDocument();
  expect(getByText('Cell 2')).toBeInTheDocument();
});
