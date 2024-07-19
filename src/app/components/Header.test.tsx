import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the header with logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByAltText('hng header image')).toBeInTheDocument();
    expect(screen.getAllByText('HNG Boilerplate')).toHaveLength(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Career')).toBeInTheDocument();
  });
});
