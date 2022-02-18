
import React from 'react';
// libraries to mock out a server
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// library to test react
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

// import component I want to test
import Reviews from './Reviews';

const server = setupServer(
  rest.get('/reviews', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
);
// setup server before each test
beforeAll(() => server.listen());
// after each test reset server
afterEach(() => server.resetHandlers());
// bring the server down
afterAll(() => server.close());

test('loads and displays global state', async () => {
  // Renders the component
  render(<Reviews url="/reviews" />);
  // Tests it with a click event
  fireEvent.click(screen.getByText('Load reviews'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByText('40344')).toBeVisible();
});