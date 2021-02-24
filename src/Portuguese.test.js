import React from 'react';
import { render, screen } from '@testing-library/react';
import Portuguese from './Portuguese';

test('renders the ola mundo button', () => {
  render(<Portuguese />);
  expect(screen.getByText('Olá Mundo, de Santa Catarina!')).toBeInTheDocument();
});
