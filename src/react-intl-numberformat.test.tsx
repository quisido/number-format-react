import { render } from '@testing-library/react';
import React from 'react';
import NumberFormat from './react-intl-numberformat';

describe('NumberFormat', (): void => {
  it('should render correctly', (): void => {
    render(<NumberFormat>21</NumberFormat>);
  });
});
