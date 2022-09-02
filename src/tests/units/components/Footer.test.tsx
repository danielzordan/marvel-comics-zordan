import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components/Footer';

describe('Unit tests Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />);

    const footer = screen.getByText('Marvel API');

    expect(footer).not.toBe(undefined);
  });
});
