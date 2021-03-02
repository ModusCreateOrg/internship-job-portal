import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('404 Error displayed properly', async () => {
  render(<NotFound />);

  expect(screen.getByText('404 Error')).toBeInTheDocument();
});
