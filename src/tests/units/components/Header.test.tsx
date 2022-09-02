import { render, screen } from '@testing-library/react';
import { Header } from '../../../components/Header';

describe('Unit tests Header component', () => {
  it('should render correctly', () => {
    render(<Header />);

    const header = screen.getByText('Marvel Comics');

    expect(header).not.toBe(undefined);
  });
});
