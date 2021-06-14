import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('should show movie page as default', () => {

  render(<App />);

  const moviePage = screen.getByTestId('movie-page');

  expect(moviePage).toBeInTheDocument();
});
