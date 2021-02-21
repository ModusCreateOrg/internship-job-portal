import React from 'react';
import { render, screen } from '@testing-library/react';
import Spanish from './Spanish';

test('renders the hola mundo button', () => {
  render(<Spanish />);
  expect(screen.getByText('Hola Mundo!')).toBeInTheDocument();
});
