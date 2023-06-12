import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import  {BrowserRouter, MemoryRouter } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  render(<App />, {wrapper: BrowserRouter});
  const user = userEvent.setup();

  //verify page content for default route
  expect(screen.getByText(/classic where's waldo/i)).toBeInTheDocument();

  //verify content for expected route after navigatinf
  await user.click(screen.getByText(/beach/i))
  expect(screen.getByText(/beach/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
    );
  
  // verify navigation to not found
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});

