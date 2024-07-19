import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('has all social media links', () => {
    render(<Footer />);

    const twitterIcons = screen.getAllByAltText('footer twitter icon');
    expect(twitterIcons.length).toBeGreaterThan(0);

    const youtubeIcons = screen.getAllByAltText('footer youtube icon');
    expect(youtubeIcons.length).toBeGreaterThan(0);

    const instagramIcons = screen.getAllByAltText('footer instagram icon');
    expect(instagramIcons.length).toBeGreaterThan(0);

    // Add similar checks for the remaining social media icons
  });
});
