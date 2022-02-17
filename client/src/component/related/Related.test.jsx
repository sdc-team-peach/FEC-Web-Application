import React from 'react';
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Related from './Related';

// const route = '/related';

describe('div', () => {
  it('div', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
});

describe('has related components', () => {
  it('related', () => {
    render(<Related />);
    const title = screen.getByText('related!');
    expect(title).toBeInTheDocument;
  });
});
