import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
  it('should render Payment component', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });
}); 