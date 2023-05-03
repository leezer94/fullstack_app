import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Counter test', () => {
  it('should render App', () => {
    render(<App />);
  });
});
