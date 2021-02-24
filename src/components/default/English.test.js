import React from 'react';
import { render, screen } from '@testing-library/react';
import English from './English';

test('renders the hello world button', () => {
  render(<English />);
  expect(screen.getByText('Hello World!')).toBeInTheDocument();
});
