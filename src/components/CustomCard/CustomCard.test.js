import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCard from './CustomCard';

describe('Custom Card', () => {
  test('should render button', async () => {
    render(<CustomCard />);
  });
});
