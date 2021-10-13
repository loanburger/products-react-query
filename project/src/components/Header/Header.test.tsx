import { render, screen } from '@testing-library/react';
import { TestIds } from 'src/utils/testIds';
import Header from './Header';

test('renders welcome test', () => {
  render(<Header />);
  const linkElement = screen.getByTestId(TestIds.headerAppBarTestId);
  expect(linkElement).toBeInTheDocument();
});
